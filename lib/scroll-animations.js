"use client";

/**
 * Scroll Animation Utility
 * 
 * This utility uses the Intersection Observer API to add animations
 * to elements as they enter the viewport during scrolling.
 */

export function initScrollAnimations() {
  // Only run on client-side
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback for non-critical initialization
  const scheduleInit = window.requestIdleCallback || window.setTimeout;
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => scheduleInit(setupObservers, { timeout: 1000 }));
  } else {
    scheduleInit(setupObservers, { timeout: 1000 });
  }
}

function setupObservers() {
  // Get all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Create an Intersection Observer with optimized options
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add the 'animated' class when element enters viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Unobserve after animation is triggered to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Optimized options
    threshold: 0.05, // Reduced threshold for earlier triggering
    rootMargin: '0px 0px -10% 0px' // Trigger animations earlier
  });
  
  // Observe elements in batches to avoid layout thrashing
  let count = 0;
  const batchSize = 10;
  const observeNextBatch = () => {
    const batch = Array.from(animatedElements).slice(count, count + batchSize);
    batch.forEach(element => observer.observe(element));
    count += batchSize;
    
    if (count < animatedElements.length) {
      // Schedule next batch using requestAnimationFrame
      requestAnimationFrame(observeNextBatch);
    }
  };
  
  // Start observing in batches
  observeNextBatch();
}

// Helper function to add animation classes to elements
export function addScrollAnimation(element, animationType, delay = 0, duration = 800) {
  if (!element) return;
  
  // Add base class
  element.classList.add('animate-on-scroll');
  
  // Add animation type class
  if (animationType) {
    element.classList.add(animationType);
  }
  
  // Add delay class if specified
  if (delay > 0) {
    const delayClass = `delay-${delay}`;
    element.classList.add(delayClass);
  }
  
  // Add duration class if not default
  if (duration !== 800) {
    const durationClass = `duration-${duration}`;
    element.classList.add(durationClass);
  }
}
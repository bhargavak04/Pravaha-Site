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
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupObservers);
  } else {
    setupObservers();
  }
}

function setupObservers() {
  // Get all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add the 'animated' class when element enters viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Optionally unobserve after animation is triggered
        // observer.unobserve(entry.target);
      }
    });
  }, {
    // Options
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly before element enters viewport
  });
  
  // Observe all animated elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });
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
"use client";

import { useEffect } from 'react';
import { initScrollAnimations } from '@/lib/scroll-animations';

export default function ScrollAnimationInitializer() {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  
  return null;
}
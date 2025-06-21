"use client";

import { useEffect } from 'react';
import { initScrollAnimations } from '@/lib/scroll-animations';

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return <>{children}</>;
}
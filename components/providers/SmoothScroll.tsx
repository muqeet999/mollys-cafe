"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out for responsive, natural feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Force scroll to 0 immediately.
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    // Also force after browser load event, which fires after scroll restoration completes.
    function forceScrollTop() {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    }
    window.addEventListener('load', forceScrollTop, { once: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make lenis globally available for navigation scrolling
    window.lenis = lenis;

    return () => {
      window.removeEventListener('load', forceScrollTop);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}

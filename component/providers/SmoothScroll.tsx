"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // 0.05 is the sweet spot for luxury/heavy momentum
        wheelMultiplier: 1, // Keeps the scroll distance natural
        smoothWheel: true,
        // We explicitly let iOS/Android handle their own native touch physics
      }}
    >
      {children}
    </ReactLenis>
  );
}
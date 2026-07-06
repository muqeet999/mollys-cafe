"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Fix: Explicitly typing the easing array
  const luxuryEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          // Exit: Clean vertical curtain reveal
          exit={{ y: "-100dvh" }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A1817] text-crema overflow-hidden"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl tracking-tight mb-4"
            >
              Molly&apos;s
            </motion.h1>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: luxuryEase, delay: 0.6 }}
                className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-crema/50"
              >
                Welcoming you
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
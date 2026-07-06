"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const videoBlur = useTransform(scrollY, [0, 1000], [0, 12]);
  const blurFilter = useMotionTemplate`blur(${videoBlur}px)`;
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.85], [1, 1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);



  return (
    <section ref={ref} className="relative h-[200vh] w-full bg-[#1A1817]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between">
        
        {/* Video Background */}
        <motion.div 
          style={{ 
            scale: videoScale,
            filter: blurFilter,
            opacity: videoOpacity
          }}
          className="absolute inset-0 w-full h-full origin-center bg-[#1A1817]"
        >
          {/* Video Background (Bottom Layer) */}
          {mounted && (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="none"
              poster="/images/hero/hero-poster.jpg"
              onPlaying={() => setIsVideoReady(true)}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/hero/hero-bg.mp4" type="video/mp4" />
            </video>
          )}

          {/* Optimized Priority Poster (Top Layer) */}
          <div className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-1000 ease-in-out ${isVideoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Image
              src="/images/hero/hero-poster.jpg"
              alt="Molly's Cafe Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1817]/60 via-transparent to-[#1A1817] pointer-events-none" />
        </motion.div>

        {/* Film Grain */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />



        {/* Header Spacer - preserves layout while StickyNav handles real navigation */}
        <div className="w-full h-[72px] md:h-[96px] shrink-0" />

        {/* Main Content */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-20 w-full px-6 md:px-16 pb-24 md:pb-32 max-w-[1600px] mx-auto"
        >
          <div className="max-w-[1400px]">
            <h1 className="flex flex-col text-[#FDFBF7] drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              <div className="overflow-hidden pb-2 md:pb-4">
                <motion.div
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[10vw] md:text-[4.5rem] lg:text-[6rem] leading-[0.85] tracking-[-0.03em]"
                >
                  Where Kashmir
                </motion.div>
              </div>
              <div className="overflow-hidden pb-4 md:pb-6">
                <motion.div
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-[10vw] md:text-[4.5rem] lg:text-[6rem] leading-[0.85] tracking-[-0.02em] text-[#FDFBF7]/90 md:pl-24 lg:pl-32"
                >
                  comes together.
                </motion.div>
              </div>
            </h1>

            <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
              <div className="flex items-center gap-4 text-[#FDFBF7]/90">
                <span className="w-8 md:w-12 h-[1px] bg-[#FDFBF7]/40" />
                <p className="font-sans text-[11px] uppercase tracking-[0.15em]">
                  Srinagar, Kashmir
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandStory() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" ref={containerRef} className="relative z-10 w-full text-[#FDFBF7] -mt-[100vh]">
      
      {/* Seamless Cinematic Dissolve: Top 100vh is transparent to reveal dissolving Hero video */}
      <div className="absolute top-[100vh] bottom-0 left-0 w-full bg-[#1A1817] -z-10" />

      {/* Content */}
      <div className="relative pt-[80vh] pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-20 lg:gap-32 items-center justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 flex flex-col relative z-30"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/70 mb-10 block">
              The Molly&apos;s Experience
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.2] tracking-[-0.02em] text-[#FDFBF7]">
              From morning coffees to evening conversations, Molly&apos;s has become a place where Kashmir gathers.
            </h2>
          </motion.div>

          <div className="w-full lg:w-6/12 relative z-20">
            {/* 
              FIX: Image uses standard <img> with explicit w/h inside the parallax wrapper.
              This eliminates the fill-parent-sizing dependency that caused disappearing images.
              The outer container clips via overflow-hidden. The inner motion.div does parallax.
              The <img> is sized to 100% of its motion.div parent, not via fill positioning.
            */}
            {/* Offset Matte Frame for Magazine Layout */}
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-[80%] h-[90%] border-t border-l border-white/10 pointer-events-none -z-10 opacity-50" />
            
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2px] transition-all duration-700 ease-[0.16,1,0.3,1] hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.25),0_30px_60px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_40px_80px_-10px_rgba(0,0,0,0.35)]">
              <motion.div 
                style={{ y: imageY }}
                className="absolute inset-[-10%] w-[120%] h-[120%]"
              >
                {/* Using native <img> instead of next/image fill to avoid hydration sizing bugs */}
                <img
                  src="/images/interior/IMG_6206.jpg"
                  alt="Molly&apos;s Cafe Story"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              {/* Inner vignette: softens hard digital edges into the dark background */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(26,24,23,0.4)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/40 via-transparent to-[#1A1817]/10 pointer-events-none" />
            </div>
          </div>

        </div>
        
        {/* Placeholder for future founder film */}
        {/* <FounderStoryFilm /> */}
      </div>
    </section>
  );
}
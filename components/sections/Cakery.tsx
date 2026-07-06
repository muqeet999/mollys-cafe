"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Cakery() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-crema text-espresso py-24 md:py-32 overflow-hidden z-20">
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Intro */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-espresso/50 mb-8"
          >
            A Srinagar Identity
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className=""
          >
            <h2 className="font-cursive font-normal text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] mb-6">
              The Cakery
            </h2>
            <p className="font-serif text-xl md:text-3xl tracking-[-0.01em] text-espresso/80">
              by Molly&apos;s
            </p>
          </motion.div>
        </div>

        {/* Editorial Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          {/* Main Image */}
          <div className="w-full md:w-1/2 flex flex-col relative z-20">
            <a 
              href="https://www.swiggy.com/menu/694247?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[4/5] overflow-hidden rounded-[2px] transition-all duration-700 ease-[0.16,1,0.3,1] hover:-translate-y-1 shadow-[0_8px_30px_rgba(44,30,22,0.12),0_30px_60px_-10px_rgba(44,30,22,0.18)] hover:shadow-[0_12px_40px_rgba(44,30,22,0.16),0_40px_80px_-10px_rgba(44,30,22,0.22)] group"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-15%] w-[130%] h-[130%]">
                {/* Native img: avoids next/image fill hydration bug inside motion.div */}
                <img
                  src="/images/food/IMG_6199.jpg"
                  alt="The Cakery by Molly&apos;s"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
                />
              </motion.div>
              {/* Inner vignette: softens hard edges into warm background */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(44,30,22,0.15)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/15 via-transparent to-transparent pointer-events-none" />
              
              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 z-10 flex-col items-center justify-center bg-[#1A1817]/0 backdrop-blur-none group-hover:bg-[#1A1817]/40 group-hover:backdrop-blur-[2px] transition-all duration-700 ease-[0.16,1,0.3,1] opacity-0 group-hover:opacity-100 hidden md:flex">
                <span className="font-serif italic text-2xl lg:text-3xl text-[#FDFBF7] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  Craving this?
                </span>
                <span className="mt-4 font-sans text-[9px] uppercase tracking-[0.25em] text-[#FDFBF7]/80 flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-75">
                  Order from Molly&apos;s <span className="text-[12px] font-light">↗</span>
                </span>
              </div>
            </a>
            
            {/* Mobile-only Order Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:hidden"
            >
              <a 
                href="https://www.swiggy.com/menu/694247?source=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-espresso/70"
              >
                Order via Swiggy
                <span className="text-[12px] font-light">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Typography side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] mb-8 md:mb-12"
            >
              Warm ovens. <br />
              Fresh bakes. <br />
              <span className="italic text-espresso/60">Celebrations.</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base leading-relaxed text-espresso/70 max-w-md"
            >
              The Cakery represents our dedication to the finer details. From hand-crafted pastries to bespoke celebration cakes, every dessert is treated as a piece of art designed to sweeten the memories made at our tables.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

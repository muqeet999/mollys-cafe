"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SPACE_ITEMS = [
  {
    subtitle: "The Ambience",
    title: "Warmth & Light",
    desc: "Our interior is designed to invite conversation. Warm lighting, woven textures, and deep colors create a space that feels both expansive and intimate.",
    image: "/images/interior/IMG_6211.jpg",
  },
  {
    subtitle: "The Gathering",
    title: "Designed to Connect",
    desc: "Whether a quiet morning coffee or a vibrant evening gathering, the cafe is structured to hold the city's best moments. Every corner is crafted for comfort.",
    image: "/images/interior/IMG_6205.jpg",
  }
];

export default function Craft() {
  return (
    <>
    <section className="relative w-full bg-[#1A1817] text-[#FDFBF7] py-24 md:py-32 overflow-hidden z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.h2 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-8"
            >
              The Space.
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="font-sans text-sm md:text-base text-[#FDFBF7]/60 max-w-sm uppercase tracking-[0.15em] leading-relaxed"
            >
              An atmosphere built for Srinagar.
            </motion.p>
          </div>
          
          <motion.div 
             initial={{ opacity: 0, scaleX: 0 }}
             whileInView={{ opacity: 1, scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="hidden md:block w-32 h-[1px] bg-[#FDFBF7]/30 origin-right"
          />
        </div>

        {/* Space Items */}
        <div className="flex flex-col gap-32 md:gap-48">
          {SPACE_ITEMS.map((item, idx) => (
            <SpaceRow key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
    
    {/* Transition to Light (Cakery) */}
    <div className="w-full h-32 md:h-48 bg-gradient-to-b from-[#1A1817] to-crema" />
    </>
  );
}

const SpaceRow = ({ item, index }: { item: { subtitle: string; title: string; desc: string; image: string }; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}
    >
      {/* Image Side */}
      <div className="w-full md:w-7/12 relative">
        {/* Offset background mat */}
        <div className={`absolute ${isEven ? '-top-6 -right-6 md:-top-10 md:-right-10' : '-top-6 -left-6 md:-top-10 md:-left-10'} w-[80%] h-[90%] border-t ${isEven ? 'border-r' : 'border-l'} border-white/5 bg-[#1A1817] pointer-events-none -z-10`} />

        <div className="relative w-full aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-[2px] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.25),0_30px_60px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_40px_80px_-10px_rgba(0,0,0,0.35)]">
          <motion.div 
            style={{ y: imageY }}
            className="absolute inset-[-15%] w-[130%] h-[130%]"
          >
            {/* Native img: avoids next/image fill hydration bug inside motion.div */}
            <img 
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Inner vignette: softens hard digital edges */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(26,24,23,0.4)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/30 via-transparent to-[#1A1817]/5 pointer-events-none" />
        </div>
      </div>

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-5/12 flex flex-col"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
          {item.subtitle}
        </span>
        <h3 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-6">
          {item.title}
        </h3>
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-sm">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

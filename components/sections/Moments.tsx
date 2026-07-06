"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MOMENTS = [
  { img: "/images/interior/IMG_6211.jpg", aspect: "aspect-[16/9]", caption: "Quiet Corners", detail: "A place for deep work and slow reading." },
  { img: "/images/interior/IMG_6198.jpg", aspect: "aspect-[3/4]", caption: "Community Table", detail: "Where conversations flow into the evening." },
  { img: "/images/interior/IMG_6205.jpg", aspect: "aspect-square", caption: "The Space", detail: "Warm textures and ambient light." },
  { img: "/images/food/IMG_6208.jpg", aspect: "aspect-[4/5]", caption: "Morning Extraction", detail: "Precision and craft in every cup." },
  { img: "/images/food/IMG_6200.jpg", aspect: "aspect-[3/4]", caption: "Fresh Bakes", detail: "Warm ovens and everyday treats." }
];

// Reusable Image Block with consistent depth and magazine caption
const EditorialImage = ({ 
  moment, 
  className = "", 
  imageClassName = "",
  captionPosition = "bottom" 
}: { 
  moment: { img: string; aspect: string; caption: string; detail: string }, 
  className?: string,
  imageClassName?: string,
  captionPosition?: "bottom" | "right" | "left"
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col relative group z-10 ${className}`}
    >
      <div className={`relative w-full ${moment.aspect} overflow-hidden rounded-[2px] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.25),0_30px_60px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_40px_80px_-10px_rgba(0,0,0,0.35)] ${imageClassName}`}>
        <Image
          src={moment.img}
          alt={moment.caption}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
        />
        {/* Inner vignette for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(26,24,23,0.4)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Magazine-style subtle caption */}
      <div className={`mt-4 ${captionPosition === 'right' ? 'md:absolute md:top-0 md:-right-48 md:mt-0 md:w-40' : captionPosition === 'left' ? 'md:absolute md:bottom-0 md:-left-48 md:mb-0 md:w-40 md:text-right' : ''}`}>
        <div className={`flex flex-col gap-1 ${captionPosition === 'left' ? 'md:border-r md:pr-4' : 'border-l pl-4'} border-[#FDFBF7]/10`}>
          <span className="font-serif text-lg italic text-[#FDFBF7]/80 leading-tight">{moment.caption}</span>
          <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 leading-relaxed">{moment.detail}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Moments() {
  return (
    <section id="gallery" className="relative w-full bg-[#1A1817] text-[#FDFBF7] py-24 md:py-32 z-20">
      
      {/* Intro */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/40 mb-6 block"
        >
          A Day Inside Molly&apos;s
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] mb-6 drop-shadow-sm"
        >
          Life at Molly&apos;s
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm md:text-base text-[#FDFBF7]/80 max-w-lg mx-auto"
        >
          A collection of memories, warm lights, and slow conversations. 
          This is where Srinagar comes to connect.
        </motion.p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col gap-24 md:gap-32">
        
        {/* Sequence 1: The Establishing Hero Moment (Morning Light) */}
        <div className="w-full relative">
          <EditorialImage 
            moment={MOMENTS[0]} 
            className="w-full md:w-11/12 mx-auto"
          />
        </div>
        
        {/* Sequence 2: The Asymmetric Detail (Boulevard Views & Community Table) */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start justify-between md:px-12">
          {/* Left side: Large Portrait (IMG_6197.jpg) */}
          <EditorialImage 
            moment={MOMENTS[1]} 
            className="w-full md:w-5/12"
            captionPosition="bottom"
          />
          
          {/* Right side: Smaller Square pushed down (IMG_6198.jpg) */}
          <EditorialImage 
            moment={MOMENTS[2]} 
            className="w-full md:w-4/12 md:mt-40"
            captionPosition="bottom"
          />
        </div>

        {/* Sequence 3: The Atmosphere (Quiet Corners & The Entrance) */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start justify-between md:px-12">
          {/* Left side: Portrait pushed down (IMG_6211.jpg) */}
          <EditorialImage 
            moment={MOMENTS[3]} 
            className="w-full md:w-4/12 md:mt-32"
            captionPosition="bottom"
          />
          
          {/* Right side: Large Portrait (IMG_6205.jpg) */}
          <EditorialImage 
            moment={MOMENTS[4]} 
            className="w-full md:w-5/12"
            captionPosition="bottom"
          />
        </div>

      </div>

    </section>
  );
}

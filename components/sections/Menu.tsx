"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import MenuGalleryModal from "@/components/ui/MenuGalleryModal";

const HIGHLIGHTS = [
  {
    category: "Coffee Moments",
    title: "Our Coffee",
    desc: "A carefully curated coffee program designed for conversation and connection in the heart of Srinagar.",
    img: "/images/food/IMG_6208.jpg",
    align: "left"
  },
  {
    category: "Signature Desserts",
    title: "The Bakery",
    desc: "Warm ovens and fresh bakes. From everyday treats to moments of celebration.",
    img: "/images/food/IMG_6200.jpg",
    align: "right"
  },
  {
    category: "Continental Plates",
    title: "Continental",
    desc: "Hearty, comforting plates crafted for the Srinagar palate. A perfect accompaniment to any gathering.",
    img: "/images/food/IMG_6209.jpg",
    align: "left"
  }
];

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="menu" className="relative w-full bg-crema text-espresso py-24 md:py-32 overflow-hidden z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-espresso/20" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-espresso/60">
                The Molly&apos;s Experience
              </span>
              <span className="w-12 h-[1px] bg-espresso/20" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-8"
            >
              Molly&apos;s <br />
              <span className="italic font-light text-espresso/50">Signatures.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base leading-relaxed text-espresso/70 max-w-lg"
            >
              A curated selection of our most loved creations. Crafted with precision, designed to be remembered. 
            </motion.p>
          </div>

          <div className="flex flex-col gap-24 md:gap-40 mb-24 md:mb-32">
            {HIGHLIGHTS.map((item, index) => (
              <HighlightBlock key={index} item={item} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 border-t border-espresso/10 pt-20 md:pt-24">
              <a 
                href="/menu"
                className="group relative flex items-center gap-6 cursor-pointer"
                aria-label="View Full Menu"
              >
                <span className="font-serif text-3xl md:text-5xl italic group-hover:text-cinnamon transition-colors duration-500">
                  View Full Menu
                </span>
                <div className="w-12 md:w-24 h-[1px] bg-espresso/30 group-hover:w-16 md:group-hover:w-32 group-hover:bg-cinnamon transition-all duration-500 ease-out relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-espresso/30 group-hover:border-cinnamon rotate-45 transition-colors duration-500" />
                </div>
              </a>

              <div className="hidden md:block w-[1px] h-12 bg-espresso/10" />

              <a 
                href="https://www.swiggy.com/menu/694247?source=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-6 cursor-pointer"
                aria-label="Order Delivery"
              >
                <span className="font-serif text-3xl md:text-5xl italic group-hover:text-cinnamon transition-colors duration-500">
                  Order Delivery
                </span>
                <div className="w-12 md:w-24 h-[1px] bg-espresso/30 group-hover:w-16 md:group-hover:w-32 group-hover:bg-cinnamon transition-all duration-500 ease-out relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-espresso/30 group-hover:border-cinnamon rotate-45 transition-colors duration-500" />
                </div>
              </a>
          </div>

        </div>
      </section>

      <MenuGalleryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Transition to Dark (Moments) */}
      <div className="w-full h-32 md:h-48 bg-gradient-to-b from-crema to-[#1A1817]" />
    </>
  );
}

const HighlightBlock = ({ item }: { item: { category: string; title: string; desc: string; img: string; align: string } }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isRight = item.align === "right";

  return (
    <div 
      ref={ref}
      className={`w-full flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-20 justify-between`}
    >
      <div className={`w-full md:w-5/12 flex flex-col relative z-20`}>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/50 mb-6 block"
        >
          {item.category}
        </motion.span>
        
        <motion.h3 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-[5rem] leading-[1] tracking-[-0.02em] mb-6 text-espresso"
        >
          {item.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm md:text-base leading-relaxed text-espresso/70 max-w-sm"
        >
          {item.desc}
        </motion.p>
        
        {/* Mobile-only Order Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

      <div className="w-full md:w-6/12 relative group z-10">
        
        {/* Offset background mat */}
        <div className={`absolute ${isRight ? '-bottom-6 -left-6 md:-bottom-8 md:-left-8' : '-bottom-6 -right-6 md:-bottom-8 md:-right-8'} w-[90%] h-[95%] border-b ${isRight ? 'border-l' : 'border-r'} border-espresso/10 bg-crema pointer-events-none -z-10`} />

        <a 
          href="https://www.swiggy.com/menu/694247?source=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-[4/5] overflow-hidden rounded-[2px] cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 shadow-[0_8px_30px_rgba(44,30,22,0.12),0_30px_60px_-10px_rgba(44,30,22,0.18)] group-hover:shadow-[0_12px_40px_rgba(44,30,22,0.16),0_40px_80px_-10px_rgba(44,30,22,0.22)]"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-[-15%] w-[130%] h-[130%]">
            {/* Native img: avoids next/image fill hydration bug inside motion.div */}
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
            />
          </motion.div>
          
          {/* Inner vignette: softens hard edges into warm background */}
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(44,30,22,0.12)] pointer-events-none" />
          
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
      </div>
    </div>
  );
}

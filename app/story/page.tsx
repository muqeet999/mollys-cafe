"use client";

import Moments from "@/components/sections/Moments";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <main className="bg-[#1A1817] min-h-screen text-[#FDFBF7]">
      
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-12"
        >
          Our Story.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/70 max-w-xl"
        >
          More than just a cafe, Molly&apos;s is built to be a cornerstone of the Srinagar community. A space designed not just for consumption, but for connection. Whether you&apos;re seeking a quiet corner for morning reflection or a vibrant table for evening conversations, Molly&apos;s adapts to the rhythm of your day.
        </motion.p>
      </section>

      {/* Chapter 01: Arrival */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-16 md:mb-24"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-4 block">
            Chapter 01
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1]">
            Arrival.
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-7/12 relative aspect-[16/9] md:aspect-[4/3] rounded-[2px] overflow-hidden"
          >
             <Image src="/images/interior/IMG_6196.jpg" alt="Arrival at Molly&apos;s" fill sizes="(max-width: 768px) 100vw, 60vw" priority className="object-cover" />
             <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(26,24,23,0.3)] pointer-events-none" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 flex flex-col md:pb-12"
          >
             <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-md mb-12">
               A recognizable presence that feels both deeply rooted and entirely new. The exterior of Molly&apos;s is an invitation—a quiet contrast to the vibrant energy of the city waiting just outside its doors.
             </p>
             <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2px] overflow-hidden md:-ml-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <Image src="/images/interior/IMG_6197.jpg" alt="Molly&apos;s Exterior Detail" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(26,24,23,0.2)] pointer-events-none" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 02: Inside the Space */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 relative aspect-[4/5]"
          >
             <Image src="/images/interior/IMG_6211.jpg" alt="The Space" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-[2px]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
              Chapter 02
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-8">
              Room to breathe.
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-md">
              Our interiors are intentionally crafted to invite lingering. Warm, ambient lighting, tactile woven textures, and rich, deep colors create an environment that feels both expansive and intimately yours. It&apos;s a backdrop designed to let your conversations take center stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crafted Moments (Coffee & Food) */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 relative aspect-[4/5]"
          >
             <Image src="/images/food/IMG_6208.jpg" alt="Coffee and Food" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-[2px]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
              Chapter 03
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-8">
              Everyday moments.
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-md mb-6">
              From the precision of our morning espresso extractions to the comfort of our evening continental plates, everything we serve is an extension of our hospitality. 
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-md">
              Our bakers and chefs focus on authentic ingredients and careful preparation, ensuring that every bite and sip honors the craft behind it. It&apos;s about elevating the everyday moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Srinagar Influence */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
            The Community
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-8 max-w-3xl mx-auto">
            Shaped by the city we call home.
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/60 max-w-2xl mx-auto mb-16">
            Molly&apos;s exists in harmony with Srinagar. Whether it&apos;s the cozy, neighborhood familiarity of Baghat or the vibrant, scenic energy of the Boulevard, our spaces reflect the unique spirit of their surroundings while maintaining the unmistakable warmth of the Molly&apos;s experience.
          </p>
        </motion.div>
      </section>

      <Moments />

      {/* Ending CTA */}
      <section className="py-24 md:py-32 px-6 md:px-16 text-center border-t border-white/5 relative z-10">
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          href="/visit"
          className="group inline-flex items-center gap-6"
        >
          <span className="font-serif text-3xl md:text-5xl lg:text-[4.5rem] leading-tight group-hover:text-cinnamon transition-colors duration-500">
            Visit Molly&apos;s
          </span>
          <span className="font-light text-3xl md:text-5xl group-hover:translate-x-2 group-hover:text-cinnamon transition-all duration-500">
            →
          </span>
        </motion.a>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOCATIONS = [
  {
    name: "Baghat",
    vibe: "The Everyday Molly\u2019s",
    address: "New Airport Road, Baghat, Srinagar",
    contact: "+918899531746",
    displayContact: "88995 31746",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Molly's+Cafe+Baghat+Srinagar",
    img: "/images/interior/IMG_6210.jpg"
  },
  {
    name: "Boulevard",
    vibe: "The Scenic Molly\u2019s",
    address: "Near Nehru Park, Boulevard Road, Srinagar",
    contact: "+918899444303",
    displayContact: "88994 44303",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Molly's+Cafe+Boulevard+Srinagar",
    img: "/images/interior/IMG_6197.jpg"
  }
];

export default function Visit() {

  return (
    <section id="visit" className="relative w-full bg-[#1A1817] text-[#FDFBF7] z-20">
      
      <div className="max-w-[1100px] mx-auto w-full px-6 md:px-12 pt-24 pb-20">
        
        {/* Unified Locations Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/40 mb-4">
            Visit
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#FDFBF7]">Our Locations</h2>
        </div>

        {/* Unified Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {LOCATIONS.map((loc, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* Atmospheric Image Block */}
              <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-[2px] mb-8 bg-[#141211]">
                <div className="absolute inset-0 transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]">
                  <Image 
                    src={loc.img} 
                    alt={`Molly's Cafe ${loc.name}`} 
                    fill 
                    className="object-cover opacity-90" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                  />
                </div>
                
                {/* Layered atmospheric depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(26,24,23,0.4)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1A1817_150%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/90 via-[#1A1817]/30 to-transparent pointer-events-none" />
                
                {/* Destination Title inside the image space for editorial feel */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] tracking-wide drop-shadow-md">
                      {loc.name}
                    </h2>
                  </motion.div>
                </div>
              </div>

              {/* Prominent Usable Functional Details */}
              <div className="flex flex-col gap-6 w-full px-2">
                <div className="flex flex-col gap-2 font-sans text-sm md:text-base uppercase tracking-[0.15em] text-[#FDFBF7]/80">
                  <p>{loc.address}</p>
                  <p className="flex items-center gap-3 text-[#FDFBF7]/60 mt-1">
                    PHONE: <a href={`tel:${loc.contact}`} className="hover:text-white transition-colors text-[#FDFBF7]">{loc.displayContact}</a>
                  </p>
                </div>

                <a 
                  href={loc.mapUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#FDFBF7]/30 hover:border-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1A1817] transition-all duration-500 ease-out rounded-[2px] font-sans text-xs uppercase tracking-[0.25em] mt-2 self-start"
                >
                  GET DIRECTIONS
                  <span className="font-light text-base">↗</span>
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

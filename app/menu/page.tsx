"use client";

import { useState } from "react";
import Footer from "@/components/ui/Footer";
import MenuGalleryModal from "@/components/ui/MenuGalleryModal";
import Image from "next/image";

const MENU_CATEGORIES = [
  {
    id: "coffee",
    title: "Coffee Program",
    desc: "Ethically sourced beans, meticulously extracted. Our coffee menu is designed for true appreciation of the craft.",
    image: "/images/food/IMG_6208.jpg",
    link: "https://www.swiggy.com/menu/694247?source=sharing",
  },
  {
    id: "bakery",
    title: "The Bakery",
    desc: "Warm ovens and fresh bakes. From everyday treats to savory laminated pastries.",
    image: "/images/food/IMG_6200.jpg",
    link: "https://www.swiggy.com/menu/694247?source=sharing",
  },
  {
    id: "cakery",
    title: "The Cakery",
    desc: "Hand-crafted celebration cakes and delicate desserts. Treated as pieces of art designed to sweeten memories.",
    image: "/images/food/IMG_6199.jpg",
    link: "https://www.swiggy.com/menu/694247?source=sharing",
  },
  {
    id: "continental",
    title: "Continental",
    desc: "Hearty, comforting plates crafted for the Srinagar palate. Perfect accompaniments to any gathering.",
    image: "/images/food/IMG_6209.jpg",
    link: "https://www.swiggy.com/menu/694247?source=sharing",
  },
  {
    id: "dining",
    title: "Dining",
    desc: "Curated experiences for longer stays and deeper conversations.",
    image: "/images/interior/IMG_6196.jpg",
    link: "https://www.swiggy.com/menu/694247?source=sharing",
  }
];

export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-crema min-h-screen text-espresso">
      
      <section className="relative pt-40 md:pt-52 pb-24 px-6 md:px-16 max-w-[1400px] mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-8">
          The Menu.
        </h1>
        <p className="font-sans text-sm md:text-base leading-relaxed text-espresso/70 max-w-lg mx-auto mb-12">
          A curated selection of our creations. Crafted with precision, designed to be remembered.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center gap-4 cursor-pointer"
              aria-label="View Full Menu"
            >
              <span className="font-serif text-2xl md:text-3xl italic group-hover:text-cinnamon transition-colors duration-500">
                View Complete Menu
              </span>
              <div className="w-8 md:w-16 h-[1px] bg-espresso/30 group-hover:w-12 md:group-hover:w-20 group-hover:bg-cinnamon transition-all duration-500 ease-out relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-espresso/30 group-hover:border-cinnamon rotate-45 transition-colors duration-500" />
              </div>
            </button>

            <div className="hidden md:block w-[1px] h-8 bg-espresso/10" />

            <a 
              href="https://www.swiggy.com/menu/694247?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 cursor-pointer"
              aria-label="Order Delivery"
            >
              <span className="font-serif text-2xl md:text-3xl italic group-hover:text-cinnamon transition-colors duration-500">
                Order Delivery
              </span>
              <div className="w-8 md:w-16 h-[1px] bg-espresso/30 group-hover:w-12 md:group-hover:w-20 group-hover:bg-cinnamon transition-all duration-500 ease-out relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-espresso/30 group-hover:border-cinnamon rotate-45 transition-colors duration-500" />
              </div>
            </a>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-16 max-w-[1200px] mx-auto flex flex-col gap-24 md:gap-40">
        {MENU_CATEGORIES.map((cat, idx) => (
          <div key={cat.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
             <div className="w-full md:w-1/2 relative aspect-[4/5] group overflow-hidden rounded-[2px] shadow-[0_8px_30px_rgba(44,30,22,0.12)]">
               <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority={idx === 0} className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
               <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(44,30,22,0.12)] pointer-events-none" />
             </div>
             <div className="w-full md:w-1/2 flex flex-col items-start">
               <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-6">{cat.title}</h2>
               <p className="font-sans text-sm md:text-base leading-relaxed text-espresso/70 mb-10">{cat.desc}</p>
               
               {/* 
                 Code structure prepared for real menu items when verified data is available. 
                 Do not display fake data placeholders visually.
               */}
               {/* 
               <div className="w-full flex flex-col gap-6 mb-10 border-t border-espresso/10 pt-8">
                  <div className="flex justify-between items-start">
                     <div className="flex flex-col">
                       <span className="font-serif text-xl">Verified Item Name</span>
                       <span className="font-sans text-xs text-espresso/60 mt-1">Verified description...</span>
                     </div>
                     <span className="font-sans text-xs">₹---</span>
                  </div>
               </div> 
               */}

               <a href={cat.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-8 py-4 border border-espresso/20 hover:border-espresso hover:bg-espresso hover:text-crema transition-all duration-500 rounded-full font-sans text-[10px] uppercase tracking-[0.2em]">
                 Order on Swiggy <span className="font-light text-sm">↗</span>
               </a>
             </div>
          </div>
        ))}
      </section>

      <MenuGalleryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </main>
  );
}

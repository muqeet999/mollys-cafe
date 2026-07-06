"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";

// Permanent menu page assets
const MENU_PAGES = [
  "/images/gallery/IMG_6240.jpg",
  "/images/gallery/IMG_6242.jpg",
  "/images/gallery/IMG_6243.jpg",
  "/images/gallery/IMG_6244.jpg",
  "/images/gallery/IMG_6245.jpg",
  "/images/gallery/IMG_6246.jpg",
  "/images/gallery/IMG_6247.jpg",
  "/images/gallery/IMG_6248.jpg",
  "/images/gallery/IMG_6249.jpg",
  "/images/gallery/IMG_6250.jpg",
  "/images/gallery/IMG_6251.jpg",
  "/images/gallery/IMG_6252.jpg",
  "/images/gallery/IMG_6253.jpg",
  "/images/gallery/IMG_6254.jpg",
  "/images/gallery/IMG_6255.jpg",
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuGalleryModal({ isOpen, onClose }: Props) {
  
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Handle body lock and history state
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    
    // Push state so the browser back button closes the modal
    window.history.pushState({ menuModal: true }, "", "#full-menu");
    
    const handlePopState = () => {
      handleClose();
    };
    
    window.addEventListener("popstate", handlePopState);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", handlePopState);
      
      // Clean up hash if still present
      if (window.location.hash === "#full-menu") {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
  }, [isOpen, handleClose]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (window.location.hash === "#full-menu") {
          window.history.back();
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleCloseClick = () => {
    if (window.location.hash === "#full-menu") {
      window.history.back();
    } else {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#1A1817]/98 backdrop-blur-2xl"
        >
          {/* Premium Modal Header */}
          <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-start z-50 pointer-events-none">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/50">
                The Complete
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#FDFBF7]">
                Menu
              </h2>
            </div>

            {/* Elegant Close Button */}
            <button
              onClick={handleCloseClick}
              className="p-4 group cursor-pointer pointer-events-auto flex flex-col items-center"
              aria-label="Close full menu"
            >
              <div className="relative w-8 h-8">
                <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#FDFBF7] rotate-45 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:rotate-180" />
                <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#FDFBF7] -rotate-45 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-rotate-180" />
              </div>
              <span className="mt-2 font-sans text-[8px] uppercase tracking-[0.3em] text-[#FDFBF7]/0 group-hover:text-[#FDFBF7]/60 transition-opacity duration-300">
                Close
              </span>
            </button>
          </div>

          {/* Scroll Hint (Bottom) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center gap-3">
            <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-[#FDFBF7]/40">
              Swipe to explore
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#FDFBF7]/40 to-transparent" />
          </div>

          {/* Gallery Scroll */}
          <div 
            data-lenis-prevent="true"
            className="w-full h-full overflow-y-auto overflow-x-hidden md:overflow-x-auto md:overflow-y-hidden flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 py-32 md:px-[20vw] md:py-0 snap-y md:snap-x snap-mandatory hide-scrollbar"
          >
            
            <div className="hidden md:block shrink-0 w-1" />

            {MENU_PAGES.map((src, index) => (
              <div
                key={index}
                className="relative shrink-0 w-full max-w-[500px] md:max-w-none md:w-auto h-auto md:h-[80vh] aspect-[3/4] snap-center"
              >
                <Image
                  src={src}
                  alt={`Molly's Cafe Menu Page ${index + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 80vh"
                />
              </div>
            ))}

            <div className="hidden md:block shrink-0 w-[10vw]" />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

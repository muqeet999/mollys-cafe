"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Story", target: "/story", isExternal: false },
  { name: "Menu", target: "/menu", isExternal: false },
  { name: "Visit", target: "/visit", isExternal: false },
  { name: "Contact", target: "/contact", isExternal: false }
];

export default function StickyNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    // Legacy support for #menu in mobile nav, or logo click
    if (target === 'body') {
      if (pathname === '/') {
        if (window.lenis) {
          window.lenis.scrollTo(target, { 
            duration: 1.5, 
            easing: (t: number) => 1 - Math.pow(1 - t, 4)
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        router.push('/');
      }
    } else {
      if (window.lenis) {
        const el = document.querySelector(target);
        if (el) {
          window.lenis.scrollTo(el, { 
            duration: 1.5, 
            easing: (t: number) => 1 - Math.pow(1 - t, 4)
          });
        }
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-16 py-4 md:py-6 bg-[#1A1817]/80 backdrop-blur-md border-b border-white/5 text-[#FDFBF7]">
            {/* Logo */}
            <div 
              className="cursor-pointer group flex-shrink-0"
              onClick={() => handleNavClick('body')}
            >
              <BrandLogo light={true} align="left" className="transition-opacity duration-700 ease-out group-hover:opacity-70 scale-90 origin-left" />
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              <div className="hidden md:flex gap-10 items-center font-sans text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7]/90 mr-4">
                {NAV_LINKS.map((item) => (
                  item.isExternal ? (
                    <a 
                      key={item.name}
                      href={item.target}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative py-2 overflow-hidden hover:text-[#FDFBF7] transition-colors duration-500"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#FDFBF7] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <Link 
                      key={item.name}
                      href={item.target}
                      className="group relative py-2 overflow-hidden hover:text-[#FDFBF7] transition-colors duration-500"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#FDFBF7] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full opacity-0 group-hover:opacity-100" />
                    </Link>
                  )
                ))}
              </div>
              
              {/* CTA */}
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.swiggy.com/menu/694247?source=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-[#FDFBF7]/30 hover:border-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1A1817] transition-all duration-500 ease-out rounded-full font-sans text-[8px] md:text-[9px] uppercase tracking-[0.25em]"
                >
                  Order ↗
                </a>
                
                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden relative flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-[70] before:absolute before:-inset-2 before:content-['']"
                  aria-label="Toggle Menu"
                >
                  <span className={`w-6 h-[1px] bg-[#FDFBF7] transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                  <span className={`w-6 h-[1px] bg-[#FDFBF7] transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`w-6 h-[1px] bg-[#FDFBF7] transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                </button>
              </div>
            </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[55] bg-[#1A1817] flex flex-col items-center justify-center px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-10 w-full">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.1, ease: "easeOut" }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.target}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-4xl text-[#FDFBF7] hover:text-[#FDFBF7]/70 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.target}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-4xl text-[#FDFBF7] hover:text-[#FDFBF7]/70 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/50">
                Srinagar, Kashmir
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

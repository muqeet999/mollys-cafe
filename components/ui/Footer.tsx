"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      if (window.lenis) {
        window.lenis.scrollTo("body", { 
          duration: 1.5, 
          easing: (t: number) => 1 - Math.pow(1 - t, 4)
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="w-full bg-[#1A1817] text-[#FDFBF7] relative z-30 overflow-hidden border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col items-center">
        
        {/* Premium Brand Signature Lockup */}
        <div className="mb-20 md:mb-32 flex flex-col items-center group cursor-pointer" onClick={handleLogoClick}>
          <span className="font-cursive text-7xl md:text-8xl lg:text-[10rem] leading-[0.7] text-[#FDFBF7] transition-opacity duration-700 opacity-90 group-hover:opacity-100 pb-8 md:pb-14">
            Molly&apos;s
          </span>
          <div className="flex items-center gap-6 opacity-60">
            <span className="w-10 md:w-24 h-[1px] bg-[#FDFBF7]/60" />
            <span className="font-sans text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-[#FDFBF7] pt-1">
              Srinagar, Kashmir
            </span>
            <span className="w-10 md:w-24 h-[1px] bg-[#FDFBF7]/60" />
          </div>
        </div>

        {/* Structured Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 border-t border-white/10 pt-12 md:pt-16">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/60">Explore</span>
            <div className="flex gap-6 md:gap-8 font-sans text-xs uppercase tracking-[0.15em] text-[#FDFBF7]/80">
              <Link href="/story" className="hover:text-white transition-colors">Story</Link>
              <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
              <Link href="/visit" className="hover:text-white transition-colors">Visit</Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/60">Social</span>
            <div className="flex gap-6 md:gap-8 font-sans text-xs uppercase tracking-[0.15em] text-[#FDFBF7]/80">
              <a href="https://www.instagram.com/mollyscafesxr?igsh=Z3Exc2UzZm04eG9u" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@mollyscafesxr</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/60">Contact</span>
            <div className="flex flex-col items-center md:items-end gap-3 font-sans text-xs uppercase tracking-[0.15em] text-[#FDFBF7]/80">
              <a href="mailto:mollysscafesgr@gmail.com" className="hover:text-white transition-colors">mollysscafesgr@gmail.com</a>
              <a href="tel:+918899531746" className="hover:text-white transition-colors">Baghat: 88995 31746</a>
              <a href="tel:+918899444303" className="hover:text-white transition-colors">Boulevard: 88994 44303</a>
            </div>
          </div>

        </div>

        <div className="w-full mt-24 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7]/50">
          <p>© {new Date().getFullYear()} Molly&apos;s Cafe Srinagar.</p>
          <p>Designed with Intent</p>
        </div>

      </div>
    </footer>
  );
}

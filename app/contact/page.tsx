import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Contact & Connect | Molly's Cafe Srinagar",
  description: "For conversations, celebrations, and everyday moments. Reach out to our Baghat or Boulevard teams, or connect with us on social media.",
  openGraph: {
    title: "Contact & Connect | Molly's Cafe Srinagar",
    description: "For conversations, celebrations, and everyday moments. Reach out to our Baghat or Boulevard teams, or connect with us on social media.",
    url: "/contact",
  }
};
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-[#1A1817] min-h-screen text-[#FDFBF7] relative overflow-hidden">
      {/* Warm Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#3A2818]/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Intro */}
      <section className="relative pt-40 md:pt-52 pb-24 px-6 md:px-16 max-w-[1400px] mx-auto text-center z-10">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
          Contact
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-8">
          Reach us.
        </h1>
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/70 max-w-lg mx-auto">
          For visits, conversations, celebrations, or just quiet coffee moments—we&apos;d love to hear from you.
        </p>
      </section>

      {/* Atmospheric Warmth Image */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto z-10 relative">
        <div className="w-full relative aspect-[21/9] md:aspect-[3/1] rounded-[2px] overflow-hidden">
            <Image 
              src="/images/interior/IMG_6205.jpg" 
              alt="Molly&apos;s Cafe Atmosphere" 
              fill 
              sizes="100vw"
              priority
              className="object-cover" 
            />
          <div className="absolute inset-0 bg-[#1A1817]/20 pointer-events-none" />
        </div>
      </section>

      {/* Direct Contact Actions */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <a 
            href="tel:+918899531746"
            className="group relative flex flex-col items-start gap-4 p-10 md:p-12 border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 ease-out rounded-[2px]"
          >
            <div className="absolute top-8 right-8 text-[#FDFBF7]/40 group-hover:text-[#FDFBF7] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 font-light text-xl">
              ↗
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 group-hover:text-[#FDFBF7]/70 transition-colors duration-500">
              Baghat
            </span>
            <span className="font-serif text-3xl text-[#FDFBF7]/90 mt-2">
              Call the cafe
            </span>
            <span className="mt-8 font-sans text-[10px] tracking-[0.15em] text-[#FDFBF7]/50 group-hover:text-[#FDFBF7] transition-colors duration-500">
              88995 31746
            </span>
          </a>
          
          <a 
            href="tel:+918899444303"
            className="group relative flex flex-col items-start gap-4 p-10 md:p-12 border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 ease-out rounded-[2px]"
          >
            <div className="absolute top-8 right-8 text-[#FDFBF7]/40 group-hover:text-[#FDFBF7] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 font-light text-xl">
              ↗
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 group-hover:text-[#FDFBF7]/70 transition-colors duration-500">
              Boulevard
            </span>
            <span className="font-serif text-3xl text-[#FDFBF7]/90 mt-2">
              Call the cafe
            </span>
            <span className="mt-8 font-sans text-[10px] tracking-[0.15em] text-[#FDFBF7]/50 group-hover:text-[#FDFBF7] transition-colors duration-500">
              88994 44303
            </span>
          </a>

          <a 
            href="mailto:mollysscafesgr@gmail.com"
            className="group relative flex flex-col items-start gap-4 p-10 md:p-12 border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 ease-out rounded-[2px]"
          >
            <div className="absolute top-8 right-8 text-[#FDFBF7]/40 group-hover:text-[#FDFBF7] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 font-light text-xl">
              ↗
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 group-hover:text-[#FDFBF7]/70 transition-colors duration-500">
              Email
            </span>
            <span className="font-serif text-3xl text-[#FDFBF7]/90 mt-2">
              Send a message
            </span>
            <span className="mt-8 font-sans text-[10px] tracking-[0.15em] text-[#FDFBF7]/50 group-hover:text-[#FDFBF7] transition-colors duration-500">
              mollysscafesgr@gmail.com
            </span>
          </a>
          
        </div>
      </section>

      {/* Social / Instagram */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-5/12 relative aspect-[4/5] rounded-[2px] overflow-hidden">
             <Image 
               src="/images/interior/IMG_6211.jpg" 
               alt="Molly&apos;s Cafe Atmosphere" 
               fill 
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover" 
             />
             <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(26,24,23,0.3)] pointer-events-none" />
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col items-start">
             <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
               Social
             </span>
             <h2 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.02em] mb-8">
               @mollyscafesxr
             </h2>
             <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/70 max-w-md mb-12">
               Quiet mornings, vibrant evenings, and the people that bring Molly&apos;s to life. A closer look at our everyday.
             </p>
             <a 
               href="https://www.instagram.com/mollyscafesxr" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-[#1A1817] transition-all duration-500 rounded-full font-sans text-[10px] uppercase tracking-[0.2em]"
             >
               View Instagram <span className="font-light text-sm">↗</span>
             </a>
          </div>
        </div>
      </section>

      {/* Warm Message */}
      <section className="py-24 md:py-32 px-6 md:px-16 text-center border-t border-white/5 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto italic text-[#FDFBF7]/80">
          &mdash; For conversations, celebrations, and everyday moments. &mdash;
        </h2>
      </section>

      <Footer />
    </main>
  );
}

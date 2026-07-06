import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Visit Us | Baghat & Boulevard | Molly's Cafe",
  description: "Find your Molly's. Two distinct Srinagar spaces—the cozy neighborhood warmth of Baghat and the vibrant scenic energy of the Boulevard.",
  openGraph: {
    title: "Visit Us | Baghat & Boulevard | Molly's Cafe",
    description: "Find your Molly's. Two distinct Srinagar spaces—the cozy neighborhood warmth of Baghat and the vibrant scenic energy of the Boulevard.",
    url: "/visit",
  }
};
import Image from "next/image";

const LOCATIONS = [
  {
    id: "baghat",
    name: "Baghat",
    desc: "Our cozy neighborhood corner, perfect for quiet mornings and casual gatherings.",
    image: "/images/interior/IMG_6205.jpg",
    address: "Baghat, Srinagar, Jammu and Kashmir",
    phone: "+918899531746",
    phoneDisplay: "88995 31746",
    mapLink: "https://maps.google.com/?q=Molly&apos;s+Cafe+Baghat+Srinagar",
  },
  {
    id: "boulevard",
    name: "Boulevard",
    desc: "Experience the vibrant energy of the Boulevard with our signature hospitality.",
    image: "/images/interior/IMG_6197.jpg",
    address: "Boulevard Road, Srinagar, Jammu and Kashmir",
    phone: "+918899444303",
    phoneDisplay: "88994 44303",
    mapLink: "https://maps.google.com/?q=Molly&apos;s+Cafe+Boulevard+Srinagar",
  }
];

export default function VisitPage() {
  return (
    <main className="bg-[#1A1817] min-h-screen text-[#FDFBF7]">
      
      <section className="relative pt-40 md:pt-52 pb-24 px-6 md:px-16 max-w-[1400px] mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-0.02em] mb-8">
          Find Your Molly&apos;s.
        </h1>
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#FDFBF7]/70 max-w-lg mx-auto">
          Two distinct spaces. One unified dedication to Srinagar&apos;s community.
        </p>
      </section>

      <section className="pb-32 px-6 md:px-16 max-w-[1400px] mx-auto flex flex-col gap-32">
        {LOCATIONS.map((loc, idx) => (
          <div key={loc.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
            <div className="w-full lg:w-7/12 relative aspect-[4/3] group overflow-hidden rounded-[2px]">
              <Image src={loc.image} alt={loc.name} fill sizes="(max-width: 768px) 100vw, 50vw" priority={idx === 0} className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]" />
            </div>
            
            <div className="w-full lg:w-5/12 flex flex-col items-start">
               <h2 className="font-serif text-4xl md:text-6xl mb-6">{loc.name}</h2>
               <p className="font-sans text-sm leading-relaxed text-[#FDFBF7]/70 mb-12">{loc.desc}</p>
               
               <div className="w-full border-t border-white/10 pt-8 flex flex-col gap-8">
                 <div className="flex flex-col gap-1">
                   <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 block mb-2">Location</span>
                   <p className="font-sans text-sm tracking-wide text-[#FDFBF7]/90">{loc.address}</p>
                 </div>
                 
                 <div className="flex flex-col gap-1">
                   <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/40 block mb-2">Contact</span>
                   <p className="font-sans text-sm tracking-wide text-[#FDFBF7]/90">{loc.phoneDisplay}</p>
                 </div>
                 
                 <div className="flex items-center gap-6 mt-4">
                   <a href={`tel:${loc.phone}`} className="inline-flex items-center gap-2 border-b border-[#FDFBF7]/30 hover:border-[#FDFBF7] pb-1 transition-all duration-300 font-sans text-xs uppercase tracking-[0.15em]">
                     Call <span className="font-light">→</span>
                   </a>
                   <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[#FDFBF7]/30 hover:border-[#FDFBF7] pb-1 transition-all duration-300 font-sans text-xs uppercase tracking-[0.15em]">
                     Directions <span className="font-light">→</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stay Connected Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-6 block">
            Digital
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1] mb-16">
            Stay Connected
          </h2>
          
          <a 
            href="https://www.instagram.com/mollyscafesxr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block relative w-full max-w-xl aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2px]"
          >
            <Image 
              src="/images/interior/IMG_6211.jpg" 
              alt="Molly&apos;s Cafe Instagram" 
              fill 
              sizes="100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" 
            />
            <div className="absolute inset-0 bg-[#1A1817]/40 group-hover:bg-[#1A1817]/20 transition-colors duration-700" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <span className="font-serif italic text-2xl md:text-3xl text-[#FDFBF7] mb-3 drop-shadow-md">
                @mollyscafesxr
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/90 bg-[#1A1817]/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                Follow Molly&apos;s <span className="font-light">↗</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Molly's Cafe | Where Kashmir Comes Together",
  description: "A premium gathering space in Srinagar. Experience craft coffee, warm bakery traditions, and heartfelt hospitality across our Baghat and Boulevard locations.",
  openGraph: {
    title: "Molly's Cafe | Where Kashmir Comes Together",
    description: "A premium gathering space in Srinagar. Experience craft coffee, warm bakery traditions, and heartfelt hospitality across our Baghat and Boulevard locations.",
    url: "/",
  }
};
import BrandStory from "@/components/sections/BrandStory";
import Craft from "@/components/sections/Craft";
import Cakery from "@/components/sections/Cakery";
import Menu from "@/components/sections/Menu";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-[#1A1817]">
      <Hero />
      <BrandStory />
      <Craft />
      <Cakery />
      <Menu />
      <Footer />
    </main>
  );
}
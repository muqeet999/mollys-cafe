import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Menu | Molly's Cafe Srinagar",
  description: "From precision espresso extractions to artisanal continental plates. Explore our curated menu of fresh bakes, crafted beverages, and hearty dining.",
  openGraph: {
    title: "The Menu | Molly's Cafe Srinagar",
    description: "From precision espresso extractions to artisanal continental plates. Explore our curated menu of fresh bakes, crafted beverages, and hearty dining.",
    url: "/menu",
  }
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

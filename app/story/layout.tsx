import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Molly's Cafe Srinagar",
  description: "More than a cafe. Discover the intentional design, culinary craft, and community philosophy that shaped Molly's into Srinagar's modern gathering place.",
  openGraph: {
    title: "Our Story | Molly's Cafe Srinagar",
    description: "More than a cafe. Discover the intentional design, culinary craft, and community philosophy that shaped Molly's into Srinagar's modern gathering place.",
    url: "/story",
  }
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import StickyNav from "@/components/ui/StickyNav";

// 1. The Hospitality Serif: Warm, artisanal, and sturdy
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK"], // Enables the slightly organic, warm curves of the font
  variable: "--font-fraunces",
  display: "swap",
});

// 2. The Modern Sans: Clean, highly legible UI text
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// 3. The Luxury Cursive: Used for the Molly's wordmark and The Cakery title
const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5", // Matches --color-crema
  colorScheme: "light",
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Molly's Cafe | Where Kashmir Comes Together",
    template: "%s | Molly's Cafe",
  },
  description: "A premium gathering space in Srinagar. Experience craft coffee, warm bakery traditions, and heartfelt hospitality across our Baghat and Boulevard locations.",
  keywords: ["Mollys Cafe", "Cafe in Srinagar", "Bakery Kashmir", "Craft Coffee", "Zabarwan Cafe", "Best Cafe Srinagar", "Specialty Coffee Kashmir"],
  authors: [{ name: "Molly's Cafe" }],
  creator: "Molly's Cafe",
  openGraph: {
    title: "Molly's Cafe | Where Kashmir Comes Together",
    description: "A premium gathering space in Srinagar. Experience craft coffee, warm bakery traditions, and heartfelt hospitality.",
    url: "/",
    siteName: "Molly's Cafe",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/interior/IMG_6197.jpg",
        width: 1200,
        height: 630,
        alt: "Molly's Cafe - Boulevard Exterior",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molly's Cafe | Where Kashmir Comes Together",
    description: "A premium gathering space in Srinagar. Experience craft coffee, warm bakery traditions, and heartfelt hospitality.",
    images: ["/images/interior/IMG_6197.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Molly's Cafe",
  "image": `${baseUrl}/images/interior/IMG_6197.jpg`,
  "@id": baseUrl,
  "url": baseUrl,
  "telephone": "+918899531746",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "New Airport Road, Baghat",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Near Nehru Park, Boulevard Road",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/mollyscafesxr"
  ],
  "servesCuisine": ["Coffee", "Continental", "Bakery"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${pinyonScript.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
              }
              if (window.location.pathname !== '/') {
                window.location.replace('/');
              }
              window.scrollTo(0,0);
              document.documentElement.scrollTop = 0;
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-crema text-espresso">
        <SmoothScroll>
          <StickyNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
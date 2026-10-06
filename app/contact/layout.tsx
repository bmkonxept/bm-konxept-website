import type { Metadata } from "next";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "Contact BM KONXEPT LTD | Creative Design & Branding",
  description:
    "Contact BM KONXEPT LTD for logo design, flyer and poster design, social media graphics, business cards and stationery, branding, printing and creative design projects in Nigeria.",
  keywords: [
    "contact BM KONXEPT LTD",
    "BM KONXEPT contact",
    "BM KONXEPT Nigeria",
    "creative design company Nigeria",
    "branding company Nigeria",
    "graphic design Nigeria",
    "logo design Nigeria",
    "flyer design Nigeria",
    "poster design Nigeria",
    "social media graphics Nigeria",
    "business card design Nigeria",
    "stationery design Nigeria",
    "printing Nigeria",
    "creative company Nigeria",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact BM KONXEPT LTD | Creative Design & Branding",
    description:
      "Get in touch with BM KONXEPT LTD for creative design, branding, printing and business communication projects.",
    url: `${siteUrl}/contact`,
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BM KONXEPT LTD",
    description:
      "Contact BM KONXEPT LTD for logo design, graphic design, branding, printing and creative projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
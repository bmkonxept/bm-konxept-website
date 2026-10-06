import type { Metadata } from "next";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "About BM KONXEPT LTD | Creative Branding & Design Company",
  description:
    "Learn about BM KONXEPT LTD, a Nigerian creative company providing branding, logo design, graphic design, advertising design, printing and business communication solutions.",
  keywords: [
    "BM KONXEPT LTD",
    "BM KONXEPT",
    "about BM KONXEPT",
    "creative company Nigeria",
    "branding company Nigeria",
    "graphic design company Nigeria",
    "logo design Nigeria",
    "advertising design Nigeria",
    "printing company Nigeria",
    "business communication Nigeria",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About BM KONXEPT LTD | Creative Branding & Design Company",
    description:
      "Learn about BM KONXEPT LTD, a Nigerian creative company providing branding, logo design, graphic design, advertising design, printing and business communication solutions.",
    url: `${siteUrl}/about`,
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BM KONXEPT LTD | Creative Branding & Design Company",
    description:
      "Learn about BM KONXEPT LTD, a Nigerian creative company providing branding, graphic design, advertising design, printing and business communication solutions.",
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

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
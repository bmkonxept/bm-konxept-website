import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import RegisterSW from "./register-sw";
import InstallPrompt from "@/components/InstallPrompt";
import { company, services } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "BM KONXEPT LTD | Branding, Graphic Design & Printing in Nigeria",
    template: "%s | BM KONXEPT LTD",
  },

  description:
    "BM KONXEPT LTD is a Nigerian creative company providing logo design, flyer and poster design, social media graphics, business cards and stationery, branding, advertising design and printing solutions.",

  keywords: [
    "BM KONXEPT LTD",
    "BM KONXEPT",
    "BM KONXEPT Nigeria",
    "creative company Nigeria",
    "branding company Nigeria",
    "graphic design Nigeria",
    "logo design Nigeria",
    "flyer design Nigeria",
    "poster design Nigeria",
    "social media graphics Nigeria",
    "business card design Nigeria",
    "stationery design Nigeria",
    "advertising design Nigeria",
    "printing Nigeria",
    "creative branding Nigeria",
    "graphic design Lagos",
  ],

  authors: [
    {
      name: company.name,
      url: siteUrl,
    },
  ],

  creator: company.name,
  publisher: company.name,

  category: "Creative Services",

  applicationName: company.name,

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "BM KONXEPT LTD | Branding, Graphic Design & Printing in Nigeria",
    description:
      "BM KONXEPT LTD is a Nigerian creative company providing branding, graphic design, advertising design, printing and business communication solutions.",
    url: siteUrl,
    siteName: company.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "BM KONXEPT LTD — Innovate • Connect • Elevate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BM KONXEPT LTD | Branding, Graphic Design & Printing",
    description:
      "Creative branding, graphic design, advertising design and printing solutions by BM KONXEPT LTD.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/manifest.webmanifest",

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

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,

  name: company.name,
  alternateName: company.alternateName,

  url: siteUrl,

  logo: {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#logo`,
    url: `${siteUrl}/logo.png`,
    contentUrl: `${siteUrl}/logo.png`,
    caption: "BM KONXEPT LTD logo",
  },

  slogan: company.tagline,

  description: company.description,

  email: company.email,

  telephone: company.phone,

  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },

  knowsAbout: services.map((service) => service.title),

  sameAs: [
    company.instagram,
    company.tiktok,
  ].filter(Boolean),

  contactPoint: {
    "@type": "ContactPoint",
    "@id": `${siteUrl}/#contactpoint`,
    contactType: "customer service",
    telephone: company.phone,
    email: company.email,
    url: `${siteUrl}/contact`,
    availableLanguage: ["English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: company.name,

  alternateName: company.alternateName,

  description:
    "Official website of BM KONXEPT LTD, a Nigerian creative company providing branding, graphic design, advertising design, printing and business communication solutions.",

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "en-NG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <Script
          id="bm-konxept-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="bm-konxept-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body>
        <Navbar />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MCH14NY7WP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCH14NY7WP');
          `}
        </Script>

        {children}

        <RegisterSW />
        <InstallPrompt />
      </body>
    </html>
  );
}
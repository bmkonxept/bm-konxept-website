import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import RegisterSW from "./register-sw";
import InstallPrompt from "@/components/InstallPrompt";

export const metadata: Metadata = {
  metadataBase: new URL("https://bmkonxept.com"),

  title: {
    default: "BM KONXEPT LTD | Innovate • Connect • Elevate",
    template: "%s | BM KONXEPT LTD",
  },

  description:
    "BM KONXEPT LTD is a Nigerian creative branding, graphic design, advertising, printing and business communication company helping businesses build memorable brands and present themselves professionally.",

  keywords: [
    "BM KONXEPT",
    "BM KONXEPT LTD",
    "branding Nigeria",
    "graphic design Nigeria",
    "logo design Nigeria",
    "corporate branding Nigeria",
    "advertising Nigeria",
    "printing Nigeria",
    "business branding",
    "creative agency Nigeria",
    "graphic design",
    "print design",
    "social media design",
  ],

  authors: [
    {
      name: "BM KONXEPT LTD",
    },
  ],

  creator: "BM KONXEPT LTD",
  publisher: "BM KONXEPT LTD",

  alternates: {
    canonical: "https://bmkonxept.com",
  },

  openGraph: {
    title: "BM KONXEPT LTD | Innovate • Connect • Elevate",
    description:
      "Creative branding, advertising, printing and business communication solutions that help businesses communicate, promote and present themselves professionally.",
    url: "https://bmkonxept.com",
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "BM KONXEPT LTD logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BM KONXEPT LTD | Innovate • Connect • Elevate",
    description:
      "Creative branding, advertising, printing and business communication solutions by BM KONXEPT LTD.",
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
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <RegisterSW />
        <InstallPrompt />
      </body>
    </html>
  );
}
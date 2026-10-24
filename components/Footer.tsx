"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function TikTokLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.75 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.23a6.4 6.4 0 0 0-.88-.06 6.35 6.35 0 0 0-6.35 6.35 6.35 6.35 0 0 0 6.35 6.35 6.35 6.35 0 0 0 6.35-6.35V8.55a8.2 8.2 0 0 0 4.8 1.55V6.66a4.8 4.8 0 0 1-1.03.03Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/25 bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Company information */}
            <div>
              <Link
                href="/"
                aria-label="BM KONXEPT LTD home"
                className="inline-flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="BM KONXEPT LTD"
                  className="h-14 w-auto max-w-[220px] object-contain"
                />
              </Link>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                We help businesses communicate, promote, and present
                themselves professionally through creative branding,
                advertising, graphic design, and printing solutions.
              </p>

              <p className="mt-4 text-sm font-medium tracking-wide text-[#d4af37]">
                Innovate <span className="px-1">•</span> Connect
                <span className="px-1">•</span> Elevate
              </p>

              {/* Explore navigation */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Explore
                </h2>

                <nav
                  aria-label="Footer navigation"
                  className="mt-4 grid grid-cols-3 gap-x-4 gap-y-4 sm:max-w-lg"
                >
                  {exploreLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group inline-flex w-fit items-center gap-1 text-sm text-white/65 transition-colors hover:text-[#d4af37]"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact and social links */}
            <div className="grid content-start gap-8 sm:grid-cols-2 lg:gap-10">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Contact Us
                </h2>

                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:blessedmediakonxept@gmail.com"
                    className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-[#d4af37]"
                  >
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-[#d4af37]"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">
                      blessedmediakonxept@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:+2347087866530"
                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#d4af37]"
                  >
                    <Phone
                      size={18}
                      className="shrink-0 text-[#d4af37]"
                      aria-hidden="true"
                    />
                    <span>07087866530</span>
                  </a>

                  <a
                    href="https://wa.me/2347087866530?text=Hello%20BM%20KONXEPT%2C%20I%27d%20like%20to%20start%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with BM KONXEPT on WhatsApp"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 px-4 py-2.5 text-sm font-medium text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Chat on WhatsApp
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Follow BM KONXEPT
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Follow our work, creative projects, and latest updates.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/bmkonxept"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow BM KONXEPT on Instagram"
                    title="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  >
                    <Instagram size={19} aria-hidden="true" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@bmkonxept"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow BM KONXEPT on TikTok"
                    title="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  >
                    <TikTokLogo />
                  </a>

                  <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find BM KONXEPT on Pinterest"
                    title="Pinterest"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  >
                    <span className="text-lg font-bold" aria-hidden="true">
                      P
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/bmkonxept/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow BM KONXEPT LTD on LinkedIn"
                    title="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  >
                    <Linkedin size={19} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#d4af37]"
              >
                Terms &amp; Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#d4af37]"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="text-xs leading-6 text-white/55 sm:text-right">
              © {new Date().getFullYear()} BM KONXEPT LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
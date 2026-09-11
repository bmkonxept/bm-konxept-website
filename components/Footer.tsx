import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Music2,
} from "lucide-react";
import { company } from "@/data/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Logo Design",
  "Flyer & Poster Design",
  "Social Media Graphics",
  "Corporate Branding",
  "Printing Services",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Main footer */}
      <div className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="BM KONXEPT LTD"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-white/10 transition group-hover:ring-gold/40"
                />

                <div>
                  <div className="font-bold tracking-[0.18em] text-white">
                    BM KONXEPT
                  </div>

                  <div className="mt-1 text-[9px] tracking-[0.22em] text-gold">
                    INNOVATE • CONNECT • ELEVATE
                  </div>
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
                Creative branding, advertising, printing and business
                communication solutions for businesses and organizations that
                want to present themselves professionally.
              </p>

              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Explore */}
            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                Explore
              </div>

              <nav className="grid gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-1 text-sm text-white/50 transition hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                Services
              </div>

              <div className="grid gap-3">
                {services.map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact / Social */}
            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                Connect
              </div>

              <div className="grid gap-4">
                {/* WhatsApp */}
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>WhatsApp</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${company.phone}`}
                  className="group flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{company.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-3 break-all text-sm text-white/50 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{company.email}</span>
                </a>

                {/* Instagram */}
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
                >
                  <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>@bmkonxept on Instagram</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@bmkonxept"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
                >
                  <Music2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>@bmkonxept on TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer divider */}
          <div className="mt-14 h-px bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col gap-5 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/30">
              © 2026 BM KONXEPT LTD. All rights reserved.
            </p>

            <p className="font-semibold tracking-[0.12em] text-gold">
              {company.tagline}
            </p>

            <Link
              href="/contact"
              className="flex items-center gap-1 text-white/30 transition hover:text-gold"
            >
              Let's work together
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-t border-white/[0.06] px-5 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Creative Branding & Communication
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            BM KONXEPT LTD
          </span>
        </div>
      </div>
    </footer>
  );
}
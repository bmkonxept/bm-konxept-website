"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { company } from "@/data/site";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main navbar */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 3, scale: 1.04 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="BM KONXEPT LTD logo"
                width={56}
                height={56}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10 transition group-hover:ring-gold/50"
                priority
              />
            </motion.div>

            <div className="hidden sm:block">
              <div className="font-bold tracking-[0.18em] text-white">
                BM KONXEPT
              </div>

              <div className="text-[10px] tracking-[0.28em] text-gold">
                INNOVATE • CONNECT • ELEVATE
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map(([label, href]) => {
              const active = isActive(href);

              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "text-gold"
                      : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {label}

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Desktop CTA */}
            <motion.a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(212,175,55,0.12)] transition hover:shadow-[0_0_30px_rgba(212,175,55,0.22)]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.92 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:border-gold/40 hover:text-gold md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 pb-6 pt-4">
              <div className="flex flex-col gap-1">
                {links.map(([label, href], index) => {
                  const active = isActive(href);

                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-all ${
                          active
                            ? "bg-gold/[0.08] font-semibold text-gold"
                            : "text-white/75 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        <span>{label}</span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 font-bold text-black"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </motion.a>

              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em] text-white/25">
                Innovate • Connect • Elevate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
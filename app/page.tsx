import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";

import ServiceCards from "@/components/ServiceCards";
import PortfolioGrid from "@/components/PortfolioGrid";
import AnimatedStats from "@/components/AnimatedStats";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

/* =========================================================
   STATISTICS
========================================================= */

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Designs Delivered",
  },
  {
    value: 40,
    suffix: "+",
    label: "Clients Served",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 md:px-8">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(212,175,55,.16),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(20,70,130,.14),transparent_30%)]" />

        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          {/* HERO TEXT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />

              Creative solutions for ambitious brands
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Build a brand{" "}
              <span className="gold-text">people remember.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              BM KONXEPT helps businesses communicate, promote, and present
              themselves professionally through innovative design, strategic
              branding, advertising, printing, and creative business solutions.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
              >
                Start a Project

                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35">
              <span>Innovate</span>

              <span>Connect</span>

              <span>Elevate</span>
            </div>
          </div>

          {/* HERO LOGO */}

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-white p-4 shadow-2xl shadow-black sm:p-5">
              <Image
                src="/logo.png"
                alt="BM KONXEPT LTD"
                width={1000}
                height={1000}
                className="aspect-square w-full object-contain"
                priority
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/90 p-4 text-white backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">
                  BM KONXEPT LTD
                </div>

                <div className="mt-1 text-sm text-white/70">
                  Design • Branding • Printing • Advertising
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="relative border-y border-white/10 bg-white/[0.025] px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Small heading */}

          <div className="mb-7 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70 sm:text-xs">
              Our track record
            </p>
          </div>

          {/* Stats */}

          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* =====================================================
          ABOUT INTRO
      ===================================================== */}

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Who we are
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Creative thinking.{" "}
              <span className="text-white/40">
                Professional execution.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="leading-8 text-white/60">
            <p>
              BM KONXEPT is a modern Nigerian creative branding, marketing,
              advertising, printing, and business communication company.
            </p>

            <p className="mt-5">
              We help businesses turn ideas into memorable visual experiences —
              from identity and campaign design to print-ready materials.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Strategic creativity",
                "Professional presentation",
                "Quality-focused execution",
                "Client-centered service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm text-white/75"
                >
                  <Check className="h-5 w-5 shrink-0 text-gold" />

                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
            >
              Learn more about BM KONXEPT

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-white/[0.025] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            What we do
          </p>

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Creative services built around your brand.
            </h2>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
            >
              View all services

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="card grid gap-8 p-7 sm:p-10 lg:grid-cols-3">
            {/* STEP 1 */}

            <div>
              <div className="text-sm font-medium text-gold">
                01
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Understand
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We listen to your goals, audience and brand direction.
              </p>
            </div>

            {/* STEP 2 */}

            <div>
              <div className="text-sm font-medium text-gold">
                02
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Create
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We turn ideas into clear, compelling visual communication.
              </p>
            </div>

            {/* STEP 3 */}

            <div>
              <div className="text-sm font-medium text-gold">
                03
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Elevate
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We deliver polished assets ready for digital and print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Selected work
          </p>

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Work that communicates.
              </h2>

              <p className="mt-4 max-w-xl text-white/45">
                Explore selected branding, advertising, event and social media
                work created by BM KONXEPT.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="shrink-0 text-sm font-semibold text-gold transition hover:text-white"
            >
              See full portfolio →
            </Link>
          </div>

          <PortfolioGrid limit={9} />
        </div>
      </section>

      {/* =====================================================
          BRAND MESSAGE
      ===================================================== */}

      <section className="bg-white/[0.025] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Star className="mx-auto mb-5 h-8 w-8 fill-gold text-gold" />

          <blockquote className="text-2xl font-semibold leading-9 sm:text-4xl sm:leading-[1.2]">
            Helping businesses build memorable brands through innovative
            design, strategic branding, and high-quality creative solutions.
          </blockquote>

          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/35">
            BM KONXEPT brand message
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.16] to-white/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Let's create
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/60">
                Tell us what you need and let's turn the idea into
                professional creative work.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="h-5 w-5" />

              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </main>
  );
}
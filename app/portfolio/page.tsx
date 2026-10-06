import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import { company, portfolio } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "Creative Portfolio | Branding, Advertising & Design Work",
  description:
    "Explore selected creative work by BM KONXEPT LTD, including brand identity, logo design, advertising graphics, social media creatives, event design and print design.",
  keywords: [
    "BM KONXEPT portfolio",
    "branding portfolio Nigeria",
    "graphic design portfolio Nigeria",
    "logo design portfolio",
    "advertising design portfolio",
    "social media design Nigeria",
    "event design Nigeria",
    "print design Nigeria",
    "creative design portfolio",
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    title: "Creative Portfolio | BM KONXEPT LTD",
    description:
      "Explore selected branding, advertising, social media, event and print design work created by BM KONXEPT LTD.",
    url: `${siteUrl}/portfolio`,
    type: "website",
    siteName: "BM KONXEPT LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Portfolio | BM KONXEPT LTD",
    description:
      "Explore selected branding, advertising, social media, event and print design work created by BM KONXEPT LTD.",
  },
};

const portfolioItems = portfolio.map((project, index) => ({
  "@type": "ListItem",
  position: index + 1,
  url: `${siteUrl}/projects/${project.slug}`,
  name: project.title,
  item: {
    "@type": "CreativeWork",
    "@id": `${siteUrl}/projects/${project.slug}#creativework`,
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    image: `${siteUrl}${project.image.startsWith("/") ? "" : "/"}${
      project.image
    }`,
    genre: project.category,
    creator: {
      "@id": `${siteUrl}/#organization`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-NG",
  },
}));

const portfolioPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/portfolio/#webpage`,
  url: `${siteUrl}/portfolio`,
  name: "BM KONXEPT LTD Creative Portfolio",
  description:
    "A curated portfolio of branding, logo design, advertising design, social media graphics, event design and print design work by BM KONXEPT LTD.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-NG",
  mainEntity: {
    "@type": "ItemList",
    "@id": `${siteUrl}/portfolio/#portfolio-list`,
    name: "BM KONXEPT LTD Creative Portfolio",
    description:
      "Selected creative design work by BM KONXEPT LTD.",
    numberOfItems: portfolio.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: portfolioItems,
  },
};

export default function Portfolio() {
  return (
    <main className="pt-24">
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioPageSchema),
        }}
      />

      {/* =====================================================
          PORTFOLIO HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
        aria-labelledby="portfolio-heading"
      >
        {/* Background atmosphere */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,.14),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(20,70,130,.10),transparent_30%)]"
          aria-hidden="true"
        />

        <div
          className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Small label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Selected creative work
          </div>

          {/* Heading */}
          <h1
            id="portfolio-heading"
            className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            BM KONXEPT LTD{" "}
            <span className="gold-text">
              creative portfolio.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            Explore selected branding, logo design, advertising,
            social media, event and print design work created by
            BM KONXEPT LTD for businesses, organizations,
            communities and individuals.
          </p>

          {/* Hero actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Start a project with BM KONXEPT on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />
              Start a Project
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
            >
              Explore Our Services
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Portfolio highlights */}
          <div
            className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
            aria-label="Portfolio categories"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <BriefcaseBusiness
                className="h-5 w-5 text-gold"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-white">
                Brand Identity
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                Logos and visual identity design.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <Sparkles
                className="h-5 w-5 text-gold"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-white">
                Creative Design
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                Advertising and digital creative design.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <ArrowRight
                className="h-5 w-5 text-gold"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-white">
                Print Design
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                Professional print-ready materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO GRID
      ===================================================== */}

      <section
        className="relative bg-white/[0.025] px-5 py-20 md:px-8 md:py-24"
        aria-labelledby="portfolio-grid-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Our work
              </p>

              <h2
                id="portfolio-grid-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Explore the portfolio.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Browse selected creative projects by category,
                including branding, advertising, social media,
                event design and print design.
              </p>
            </div>

            <div
              className="text-xs uppercase tracking-[0.2em] text-white/25"
              aria-label="Portfolio categories"
            >
              Branding • Advertising • Events • Social • Print
            </div>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO CONTEXT
      ===================================================== */}

      <section
        className="px-5 py-20 md:px-8 md:py-24"
        aria-labelledby="portfolio-context-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Creative capabilities
            </p>

            <h2
              id="portfolio-context-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Design work for brands, businesses and communication.
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              The BM KONXEPT portfolio brings together selected
              creative work across brand identity, logo design,
              advertising design, social media graphics, event
              design and print design. Each category represents a
              different way visual communication can help a business,
              organization or individual present an idea clearly
              and professionally.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/10 px-4 py-2">
                Logo Design
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Brand Identity
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Advertising Design
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Social Media Graphics
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Event Design
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2">
                Print Design
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Learn About BM KONXEPT LTD
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                View Our Services
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="px-5 py-24 md:px-8"
        aria-labelledby="portfolio-cta-heading"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.16] to-white/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Your project next
              </p>

              <h2
                id="portfolio-cta-heading"
                className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl"
              >
                Have an idea worth bringing to life?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/55">
                Whether you need a new identity, promotional
                design, event artwork, social media creative,
                printing or professional business materials,
                BM KONXEPT LTD is ready to help.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp BM KONXEPT LTD about a project"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle
                className="h-5 w-5"
                aria-hidden="true"
              />
              WhatsApp BM KONXEPT
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
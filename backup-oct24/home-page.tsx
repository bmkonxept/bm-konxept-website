import type { Metadata } from "next";
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
import { company, portfolio, services } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

/* =========================================================
   HOMEPAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "BM KONXEPT LTD | Branding, Graphic Design & Printing in Nigeria",
  description:
    "BM KONXEPT LTD is a Nigerian creative company providing logo design, flyer and poster design, social media graphics, business cards and stationery, branding, advertising design and printing solutions.",
  keywords: [
    "BM KONXEPT LTD",
    "BM KONXEPT",
    "BM KONXEPT Nigeria",
    "creative company Nigeria",
    "branding company Nigeria",
    "graphic design company Nigeria",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "BM KONXEPT LTD | Branding, Graphic Design & Printing in Nigeria",
    description:
      "Explore BM KONXEPT LTD — a Nigerian creative company helping businesses communicate, promote and present themselves professionally through branding, graphic design, advertising design and printing.",
    url: siteUrl,
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BM KONXEPT LTD | Branding, Graphic Design & Printing",
    description:
      "Creative branding, graphic design, advertising design and printing solutions by BM KONXEPT LTD.",
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

/* =========================================================
   HOMEPAGE ORGANIZATION ENTITY
========================================================= */

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
  knowsAbout: services.map((service) => service.title),
};

/* =========================================================
   WEBSITE ENTITY
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "BM KONXEPT LTD",
  alternateName: company.alternateName,
  description:
    "Official website of BM KONXEPT LTD, a Nigerian creative branding, graphic design, advertising and printing company.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   HOMEPAGE ENTITY
========================================================= */

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "BM KONXEPT LTD | Branding, Graphic Design & Printing in Nigeria",
  description:
    "Official website of BM KONXEPT LTD, a Nigerian creative company providing branding, graphic design, advertising design, printing and business communication solutions.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@id": `${siteUrl}/#organization`,
  },
  primaryImageOfPage: {
    "@id": `${siteUrl}/#logo`,
  },
  breadcrumb: {
    "@id": `${siteUrl}/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   SERVICE LIST
========================================================= */

const serviceItems = services.map((service, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: service.title,
  item: {
    "@type": "Service",
    "@id": `${siteUrl}/services/#service-${index + 1}`,
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: service.title,
  },
}));

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#service-list`,
  name: "BM KONXEPT LTD Creative Services",
  description:
    "Current creative services offered by BM KONXEPT LTD.",
  numberOfItems: services.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: serviceItems,
};

/* =========================================================
   PORTFOLIO LIST
========================================================= */

const portfolioItems = portfolio.map((project, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: project.title,
  url: `${siteUrl}/projects/${project.slug}`,
  item: {
    "@type": "CreativeWork",
    "@id": `${siteUrl}/projects/${project.slug}#creativework`,
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    image: `${siteUrl}${project.image.startsWith("/") ? "" : "/"}${project.image}`,
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

const portfolioListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#portfolio-list`,
  name: "BM KONXEPT LTD Creative Portfolio",
  description:
    "Selected branding, advertising, social media, event design and print design projects created by BM KONXEPT LTD.",
  numberOfItems: portfolio.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: portfolioItems,
};

/* =========================================================
   BREADCRUMB
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

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
          HOMEPAGE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            websiteSchema,
            homePageSchema,
            serviceListSchema,
            portfolioListSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        aria-labelledby="home-hero-heading"
        className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 md:px-8"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(212,175,55,.16),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(20,70,130,.14),transparent_30%)]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          {/* HERO TEXT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              Creative solutions for ambitious brands
            </div>

            <h1
              id="home-hero-heading"
              className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl"
            >
              BM KONXEPT LTD:{" "}
              <span className="gold-text">
                creative branding and design.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              BM KONXEPT LTD is a Nigerian creative company helping businesses
              communicate, promote, and present themselves professionally
              through branding, graphic design, advertising design, printing,
              and business communication solutions.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Start a project with BM KONXEPT LTD on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
              >
                Start a Project

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>

              <Link
                href="/portfolio"
                aria-label="View the BM KONXEPT LTD creative portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
              >
                Explore Our Creative Work
              </Link>
            </div>

            <div
              className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35"
              aria-label="BM KONXEPT brand values"
            >
              <span>Innovate</span>
              <span>Connect</span>
              <span>Elevate</span>
            </div>
          </div>

          {/* HERO LOGO */}

          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-white p-4 shadow-2xl shadow-black sm:p-5">
              <Image
                src="/logo.png"
                alt="BM KONXEPT LTD logo"
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
                  Branding • Design • Printing • Advertising
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section
        aria-labelledby="track-record-heading"
        className="relative border-y border-white/10 bg-white/[0.025] px-5 py-10 md:px-8 md:py-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <h2
              id="track-record-heading"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70 sm:text-xs"
            >
              Our track record
            </h2>
          </div>

          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* =====================================================
          ABOUT INTRO
      ===================================================== */}

      <section
        aria-labelledby="about-intro-heading"
        className="px-5 py-24 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Who we are
            </p>

            <h2
              id="about-intro-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Creative thinking.{" "}
              <span className="text-white/40">
                Professional execution.
              </span>
            </h2>
          </div>

          <div className="leading-8 text-white/60">
            <p>
              <strong className="font-semibold text-white">
                BM KONXEPT LTD
              </strong>{" "}
              is a modern Nigerian creative branding, advertising, printing,
              and business communication company.
            </p>

            <p className="mt-5">
              We help businesses turn ideas into memorable visual experiences,
              from logo and identity design to promotional graphics,
              advertising materials, social media designs, and print-ready
              business materials.
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
                  <Check
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />

                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              aria-label="Learn more about BM KONXEPT LTD"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
            >
              Learn more about BM KONXEPT LTD

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        aria-labelledby="services-heading"
        className="bg-white/[0.025] px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            What we do
          </p>

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2
                id="services-heading"
                className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Creative services built around your brand.
              </h2>

              <p className="mt-4 max-w-2xl text-white/50">
                Explore the current creative services offered by BM KONXEPT
                LTD for businesses and organizations.
              </p>
            </div>

            <Link
              href="/services"
              aria-label="View all BM KONXEPT LTD services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
            >
              View all BM KONXEPT LTD services

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        aria-labelledby="process-heading"
        className="px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              How we work
            </p>

            <h2
              id="process-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              From idea to professional creative work.
            </h2>
          </div>

          <div className="card grid gap-8 p-7 sm:p-10 lg:grid-cols-3">
            <div>
              <div className="text-sm font-medium text-gold">
                01
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Understand
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We listen to your goals, audience, project requirements, and
                brand direction.
              </p>
            </div>

            <div>
              <div className="text-sm font-medium text-gold">
                02
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Create
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We turn ideas into clear, compelling visual communication
                designed around your message.
              </p>
            </div>

            <div>
              <div className="text-sm font-medium text-gold">
                03
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Elevate
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                We deliver polished creative assets prepared for digital and
                print use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        aria-labelledby="portfolio-heading"
        className="px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Selected work
          </p>

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2
                id="portfolio-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Creative work that communicates.
              </h2>

              <p className="mt-4 max-w-xl text-white/45">
                Explore selected branding, advertising, event, and social
                media work created by BM KONXEPT LTD.
              </p>
            </div>

            <Link
              href="/portfolio"
              aria-label="View the full BM KONXEPT LTD portfolio"
              className="shrink-0 text-sm font-semibold text-gold transition hover:text-white"
            >
              View the full BM KONXEPT portfolio →
            </Link>
          </div>

          <PortfolioGrid limit={9} />
        </div>
      </section>

      {/* =====================================================
          BRAND MESSAGE
      ===================================================== */}

      <section
        aria-labelledby="brand-message-heading"
        className="bg-white/[0.025] px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Star
            className="mx-auto mb-5 h-8 w-8 fill-gold text-gold"
            aria-hidden="true"
          />

          <h2
            id="brand-message-heading"
            className="sr-only"
          >
            BM KONXEPT brand message
          </h2>

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
          INTERNAL NAVIGATION
      ===================================================== */}

      <section
        aria-labelledby="home-navigation-heading"
        className="px-5 py-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Explore BM KONXEPT LTD
            </p>

            <h2
              id="home-navigation-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl"
            >
              Discover our company, services and creative work.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/45">
              Learn about BM KONXEPT LTD, explore our current creative
              services, view our portfolio and contact us about your next
              project.
            </p>

            <nav
              aria-label="BM KONXEPT LTD main content"
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                About BM KONXEPT LTD

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                Our Services

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                Creative Portfolio

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                Contact BM KONXEPT

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        aria-labelledby="final-cta-heading"
        className="px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.16] to-white/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Let's create
              </p>

              <h2
                id="final-cta-heading"
                className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl"
              >
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/60">
                Tell BM KONXEPT LTD what you need and let's turn the idea into
                professional creative work.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact BM KONXEPT LTD on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle
                className="h-5 w-5"
                aria-hidden="true"
              />

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
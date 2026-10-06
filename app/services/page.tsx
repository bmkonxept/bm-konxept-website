import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Palette,
  Megaphone,
  Sparkles,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

import Footer from "@/components/Footer";
import { company, services } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Services | Branding, Graphic Design & Printing | BM KONXEPT LTD",
  description:
    "Explore BM KONXEPT LTD creative services, including logo design, flyer and poster design, social media graphics, and business cards and stationery for businesses and organizations in Nigeria.",
  keywords: [
    "BM KONXEPT LTD services",
    "BM KONXEPT services",
    "logo design Nigeria",
    "flyer design Nigeria",
    "poster design Nigeria",
    "social media graphics Nigeria",
    "business card design Nigeria",
    "stationery design Nigeria",
    "graphic design Nigeria",
    "branding services Nigeria",
    "printing Nigeria",
    "creative design company Nigeria",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Services | Branding, Graphic Design & Printing | BM KONXEPT LTD",
    description:
      "Explore BM KONXEPT LTD creative services, including logo design, flyer and poster design, social media graphics, and business cards and stationery.",
    url: `${siteUrl}/services`,
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | BM KONXEPT LTD",
    description:
      "Explore logo design, flyer and poster design, social media graphics, and business cards and stationery from BM KONXEPT LTD.",
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
   SERVICE ICONS
========================================================= */

const serviceIcons = [
  Palette,
  Megaphone,
  Sparkles,
  CreditCard,
];

/* =========================================================
   SERVICE ENTITY LIST
========================================================= */

const serviceEntities = services.map((service, index) => ({
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
}));

/* =========================================================
   SERVICES ITEM LIST
========================================================= */

const serviceItems = services.map((service, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: service.title,
  item: {
    "@id": `${siteUrl}/services/#service-${index + 1}`,
  },
}));

/* =========================================================
   SERVICES PAGE STRUCTURED DATA
========================================================= */

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/services/#webpage`,
  url: `${siteUrl}/services`,
  name: "BM KONXEPT LTD Services | Branding, Design & Printing",
  description:
    "Explore the creative services currently offered by BM KONXEPT LTD, including logo design, flyer and poster design, social media graphics, and business cards and stationery.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@id": `${siteUrl}/services/#service-list`,
  },
  breadcrumb: {
    "@id": `${siteUrl}/services/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   WEBPAGE ENTITY
========================================================= */

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/services/#webpage`,
  url: `${siteUrl}/services`,
  name: "BM KONXEPT LTD Services | Branding, Design & Printing",
  description:
    "Explore the creative services currently offered by BM KONXEPT LTD, including logo design, flyer and poster design, social media graphics, and business cards and stationery.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@id": `${siteUrl}/services/#service-list`,
  },
  breadcrumb: {
    "@id": `${siteUrl}/services/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   SERVICE ITEM LIST SCHEMA
========================================================= */

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/services/#service-list`,
  name: "BM KONXEPT LTD Creative Services",
  description:
    "Current creative services offered by BM KONXEPT LTD for businesses and organizations.",
  numberOfItems: services.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: serviceItems,
};

/* =========================================================
   BREADCRUMB STRUCTURED DATA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/services/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/services`,
    },
  ],
};

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <main className="pt-24">
      {/* =====================================================
          SERVICES PAGE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            servicesPageSchema,
            webPageSchema,
            serviceListSchema,
            breadcrumbSchema,
            ...serviceEntities,
          ]),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        aria-labelledby="services-hero-heading"
        className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,.14),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(20,70,130,.10),transparent_30%)]"
          aria-hidden="true"
        />

        <div
          className="absolute right-10 top-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />

            BM KONXEPT LTD creative services
          </div>

          <h1
            id="services-hero-heading"
            className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Creative services that help your brand{" "}
            <span className="gold-text">
              show up professionally.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            BM KONXEPT LTD provides creative branding and design solutions for
            businesses and organizations, including logo design, promotional
            graphics, social media graphics, business cards, stationery and
            other visual communication materials.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Discuss a creative project with BM KONXEPT LTD on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />

              Discuss Your Project
            </a>

            <Link
              href="/portfolio"
              aria-label="Explore the BM KONXEPT LTD creative portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
            >
              Explore Our Work

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/30"
            aria-label="BM KONXEPT LTD service categories"
          >
            <span>Branding</span>
            <span>Graphic Design</span>
            <span>Printing</span>
            <span>Advertising</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT SERVICES
      ===================================================== */}

      <section
        aria-labelledby="current-services-heading"
        className="bg-white/[0.025] px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              What we currently offer
            </p>

            <h2
              id="current-services-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Creative services designed around{" "}
              <span className="text-white/40">
                your brand.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Explore the current creative services offered by BM KONXEPT LTD
              to help businesses communicate clearly, promote their work and
              present themselves professionally.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[index % serviceIcons.length];

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/20 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:scale-105 group-hover:border-gold/40 group-hover:bg-gold/15">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:border-gold/30 group-hover:text-gold">
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70">
                      BM KONXEPT LTD
                    </p>

                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/55">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className="relative mt-7 h-px w-full overflow-hidden bg-white/10"
                    aria-hidden="true"
                  >
                    <div className="h-full w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE VALUE
      ===================================================== */}

      <section
        aria-labelledby="service-value-heading"
        className="px-5 py-24 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Why creative design matters
            </p>

            <h2
              id="service-value-heading"
              className="text-4xl font-black tracking-tight sm:text-5xl"
            >
              Your visual communication should work as hard as your business.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Communicate clearly",
                description:
                  "Present your message through visual work that is clear, purposeful and easy for your audience to understand.",
              },
              {
                title: "Build a professional presence",
                description:
                  "Create visual materials that help your business look consistent, credible and prepared.",
              },
              {
                title: "Make your brand memorable",
                description:
                  "Use thoughtful design to create stronger recognition across promotional and business materials.",
              },
              {
                title: "Prepare for digital and print",
                description:
                  "Develop creative assets suited to the intended use, whether you need digital graphics or print-ready materials.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                    <CheckCircle2
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/45">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Our approach
            </p>

            <h2
              id="process-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Simple process.{" "}
              <span className="text-white/40">
                Professional results.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              We keep the creative process straightforward, from understanding
              your requirements to delivering polished visual work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Tell us what you need
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Share your idea, project goals, audience, preferred style,
                timeline and any important details.
              </p>
            </div>

            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                We create
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                We turn your requirements into clear, attractive and
                professional creative work.
              </p>
            </div>

            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                You elevate
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Receive polished creative assets prepared for your intended
                digital or print use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL NAVIGATION
      ===================================================== */}

      <section
        aria-labelledby="explore-work-heading"
        className="px-5 pb-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Explore BM KONXEPT LTD
            </p>

            <h2
              id="explore-work-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl"
            >
              See our work and learn more about BM KONXEPT LTD.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/45">
              Explore selected creative work or learn more about the company,
              its purpose and the values behind its creative approach.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                aria-label="View the BM KONXEPT LTD portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                View Portfolio

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/about"
                aria-label="Learn more about BM KONXEPT LTD"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                About BM KONXEPT LTD

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
        aria-labelledby="services-cta-heading"
        className="px-5 pb-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.16] to-white/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Start a project
              </p>

              <h2
                id="services-cta-heading"
                className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl"
              >
                Ready to bring your idea to life?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/55">
                Tell BM KONXEPT LTD what you are working on and let's create
                something professional, memorable and built around your goals.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact BM KONXEPT LTD on WhatsApp about a project"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle
                className="h-5 w-5"
                aria-hidden="true"
              />

              WhatsApp BM KONXEPT LTD
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
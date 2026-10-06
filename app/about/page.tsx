"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Target,
  Sparkles,
  Users,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

/* =========================================================
   ABOUT PAGE STRUCTURED DATA
========================================================= */

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about/#webpage`,
  url: `${siteUrl}/about`,
  name: "About BM KONXEPT LTD | Creative Branding & Design Company",
  description:
    "Learn about BM KONXEPT LTD, a Nigerian creative company focused on branding, graphic design, advertising design, printing and business communication.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@id": `${siteUrl}/#organization`,
  },
  breadcrumb: {
    "@id": `${siteUrl}/about/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   ABOUT PAGE WEBPAGE ENTITY
========================================================= */

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/about/#webpage`,
  url: `${siteUrl}/about`,
  name: "About BM KONXEPT LTD | Creative Branding & Design Company",
  description:
    "Learn about BM KONXEPT LTD, a Nigerian creative company focused on branding, graphic design, advertising design, printing and business communication.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@id": `${siteUrl}/#organization`,
  },
  breadcrumb: {
    "@id": `${siteUrl}/about/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   BREADCRUMB STRUCTURED DATA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/about/#breadcrumb`,
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
      name: "About",
      item: `${siteUrl}/about`,
    },
  ],
};

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    title: "Creativity",
    description:
      "We approach every project with fresh ideas and thoughtful visual direction.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description:
      "We pay attention to the details that make creative work look polished and professional.",
    icon: CheckCircle2,
  },
  {
    title: "Connection",
    description:
      "We believe effective design starts with understanding the people, businesses and audiences behind it.",
    icon: Users,
  },
  {
    title: "Growth",
    description:
      "Our creative solutions are designed to help businesses communicate better and present themselves with confidence.",
    icon: ArrowRight,
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main className="pt-24">
      {/* =====================================================
          ABOUT PAGE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            aboutPageSchema,
            webPageSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
      >
        <div
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/[0.06] blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="eyebrow">About BM KONXEPT LTD</p>

            <h1
              id="about-hero-heading"
              className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl"
            >
              About{" "}
              <span className="gold-text">BM KONXEPT LTD.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
              BM KONXEPT LTD is a Nigerian creative branding, graphic design,
              advertising, printing and business communication company focused
              on helping businesses communicate, promote and present themselves
              professionally.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Talk to BM KONXEPT LTD on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                <MessageCircle
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Talk to BM KONXEPT LTD
              </a>

              <Link
                href="/portfolio"
                aria-label="Explore the BM KONXEPT LTD portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                Explore Our Work

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMPANY STORY
      ===================================================== */}

      <section
        aria-labelledby="company-story-heading"
        className="border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Who we are</p>

            <h2
              id="company-story-heading"
              className="mt-4 text-4xl font-black tracking-tight sm:text-6xl"
            >
              Creative thinking with{" "}
              <span className="gold-text">purpose.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-8 text-white/50"
          >
            <p>
              <strong className="font-semibold text-white">
                BM KONXEPT LTD
              </strong>{" "}
              is a Nigerian creative company focused on branding, graphic
              design, advertising, printing and business communication.
            </p>

            <p>
              We believe design is more than making something look attractive.
              Good creative work should communicate an idea, establish trust
              and help people understand what a business represents.
            </p>

            <p>
              We work across logo and brand identity design, promotional
              graphics, social media creatives, event designs, corporate
              materials, printing and other visual communication needs.
            </p>

            <p>
              Whether you are building a new identity, promoting an event,
              launching a product or strengthening your business presence, we
              aim to create work that is clear, memorable and professionally
              presented.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                aria-label="Explore BM KONXEPT LTD creative services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Explore our creative services

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section
        aria-labelledby="creative-focus-heading"
        className="px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Our creative focus</p>

            <h2
              id="creative-focus-heading"
              className="mt-4 text-4xl font-black tracking-tight sm:text-6xl"
            >
              Helping businesses{" "}
              <span className="gold-text">communicate visually.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/50">
              BM KONXEPT LTD develops practical visual communication for
              businesses, organizations, events and promotional campaigns.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Brand Identity",
              "Logo Design",
              "Graphic Design",
              "Advertising Design",
              "Flyer & Poster Design",
              "Social Media Graphics",
              "Event Design",
              "Print Design",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <CheckCircle2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section
        aria-labelledby="purpose-heading"
        className="px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">What drives us</p>

            <h2
              id="purpose-heading"
              className="mt-4 text-4xl font-black tracking-tight sm:text-6xl"
            >
              Purpose behind the{" "}
              <span className="gold-text">creative.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* MISSION */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.10] to-white/[0.02] p-8 sm:p-10"
            >
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/[0.08] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold">
                  <Target
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Our Mission
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Help businesses communicate with confidence.
                </h3>

                <p className="mt-5 leading-8 text-white/45">
                  We aim to provide innovative design and branding solutions
                  that help businesses communicate clearly, promote their
                  offerings effectively and present themselves professionally.
                </p>
              </div>
            </motion.div>

            {/* VISION */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10"
            >
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gold">
                  <Eye
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Our Vision
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Build memorable brands through creative excellence.
                </h3>

                <p className="mt-5 leading-8 text-white/45">
                  We envision BM KONXEPT as a trusted creative partner for
                  businesses and organizations seeking thoughtful branding,
                  effective visual communication and quality creative
                  solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section
        aria-labelledby="values-heading"
        className="border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Our values</p>

            <h2
              id="values-heading"
              className="mt-4 text-4xl font-black tracking-tight sm:text-6xl"
            >
              Principles that shape{" "}
              <span className="gold-text">our work.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-white/10 bg-black/30 p-7 transition-all duration-300 hover:border-gold/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold transition group-hover:border-gold/40">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold transition-colors group-hover:text-gold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CREATIVE LEADERSHIP
      ===================================================== */}

      <section
        aria-labelledby="creative-leadership-heading"
        className="px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 sm:p-12 lg:p-16">
            <div
              className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="eyebrow">Creative leadership</p>

                <h2
                  id="creative-leadership-heading"
                  className="mt-4 text-4xl font-black tracking-tight sm:text-6xl"
                >
                  Built around{" "}
                  <span className="gold-text">creative thinking.</span>
                </h2>
              </div>

              <div>
                <p className="text-2xl font-semibold leading-10 text-white sm:text-3xl">
                  “Helping businesses build memorable brands through
                  innovative design, strategic branding, and high-quality
                  creative solutions.”
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <p className="mt-5 text-sm leading-7 text-white/40">
                  BM KONXEPT combines creative direction, visual communication
                  and practical business understanding to develop work that
                  serves a purpose beyond aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL NAVIGATION
      ===================================================== */}

      <section
        aria-labelledby="explore-heading"
        className="px-5 pb-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <p className="eyebrow">Explore BM KONXEPT LTD</p>

            <h2
              id="explore-heading"
              className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
            >
              Discover our services and creative work.
            </h2>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                aria-label="View BM KONXEPT LTD services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                View Services

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/portfolio"
                aria-label="View BM KONXEPT LTD portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                View Portfolio

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
        aria-labelledby="about-cta-heading"
        className="px-5 pb-24 md:px-8 md:pb-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Innovate • Connect • Elevate
          </p>

          <h2
            id="about-cta-heading"
            className="mt-5 text-4xl font-black tracking-tight sm:text-6xl"
          >
            Ready to build your{" "}
            <span className="gold-text">brand?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/45">
            Let's discuss your next creative project and turn your idea into
            professional visual communication.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Start a project with BM KONXEPT LTD on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />

              Start a Project
            </a>

            <Link
              href="/contact"
              aria-label="Contact BM KONXEPT LTD"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
            >
              Contact Us

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
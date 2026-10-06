"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/Footer";
import { company, services as siteServices } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

/* =========================================================
   CONTACT SERVICE OPTIONS
   Uses the current BM KONXEPT LTD services from site.ts
========================================================= */

const services = siteServices.map((service) => service.title);

/* =========================================================
   CONTACT PAGE STRUCTURED DATA
========================================================= */

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact/#webpage`,
  url: `${siteUrl}/contact`,
  name: "Contact BM KONXEPT LTD",
  description:
    "Contact BM KONXEPT LTD for logo design, flyer and poster design, social media graphics, business cards and stationery, branding and creative design enquiries.",
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
    "@id": `${siteUrl}/contact/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   WEBPAGE ENTITY
========================================================= */

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/contact/#webpage`,
  url: `${siteUrl}/contact`,
  name: "Contact BM KONXEPT LTD | Creative Design & Branding",
  description:
    "Get in touch with BM KONXEPT LTD for creative design, branding, advertising design, printing and business communication projects.",
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
    "@id": `${siteUrl}/contact/#breadcrumb`,
  },
  inLanguage: "en-NG",
};

/* =========================================================
   CONTACT POINT
========================================================= */

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "@id": `${siteUrl}/contact/#contactpoint`,
  contactType: "customer service",
  telephone: company.phone,
  email: company.email,
  url: `${siteUrl}/contact`,
  availableLanguage: ["English"],
};

/* =========================================================
   BREADCRUMB STRUCTURED DATA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/contact/#breadcrumb`,
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
      name: "Contact",
      item: `${siteUrl}/contact`,
    },
  ],
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [details, setDetails] = useState("");

  const whatsappMessage = `Hello BM KONXEPT, I'd like to start a project.

Name/Business: ${name || "Not provided"}
Service: ${selectedService || "Not specified"}

Project details:
${details || "I'd like to discuss a project."}`;

  const whatsappLink = `https://wa.me/2349131057695?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="pt-24">
      {/* =====================================================
          CONTACT PAGE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            contactPageSchema,
            webPageSchema,
            contactPointSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        aria-labelledby="contact-hero-heading"
        className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
      >
        <div
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/[0.07] blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              Let's create something great
            </div>

            <h1
              id="contact-hero-heading"
              className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
            >
              Let's build something{" "}
              <span className="gold-text">memorable.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
              Have a branding, design, printing, advertising or business
              communication project in mind? Tell us what you need and let's
              turn your idea into professional creative work.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with BM KONXEPT LTD on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
              >
                <MessageCircle
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                Chat on WhatsApp
              </a>

              <Link
                href="/portfolio"
                aria-label="View BM KONXEPT LTD creative portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
              >
                See Our Work

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
          CONTACT OPTIONS
      ===================================================== */}

      <section
        aria-labelledby="contact-options-heading"
        className="border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Connect with us
            </p>

            <h2
              id="contact-options-heading"
              className="text-4xl font-black tracking-tight sm:text-5xl"
            >
              Choose how you'd like to{" "}
              <span className="gold-text">reach us.</span>
            </h2>

            <p className="mt-5 leading-7 text-white/45">
              We're available through WhatsApp, phone, email and social media
              to discuss your creative project.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* =================================================
                WHATSAPP
            ================================================= */}

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Message BM KONXEPT LTD on WhatsApp"
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-gold/[0.045] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/[0.08]"
            >
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/[0.08] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold">
                    <MessageCircle
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <ArrowRight
                    className="h-4 w-4 text-white/25 transition group-hover:translate-x-1 group-hover:text-gold"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  WhatsApp
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Start a conversation
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Message BM KONXEPT directly about your branding, design or
                  printing project.
                </p>
              </div>
            </a>

            {/* =================================================
                PHONE
            ================================================= */}

            <a
              href={`tel:${company.phone}`}
              aria-label={`Call BM KONXEPT LTD at ${company.phone}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <Phone
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <ArrowRight
                  className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Phone
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {company.phone}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Call BM KONXEPT to discuss your project requirements.
              </p>
            </a>

            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href={`mailto:${company.email}`}
              aria-label={`Email BM KONXEPT LTD at ${company.email}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <Mail
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <ArrowRight
                  className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Email
              </p>

              <h3 className="mt-2 break-all text-lg font-bold text-white">
                {company.email}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Send BM KONXEPT your project enquiry by email.
              </p>
            </a>

            {/* =================================================
                INSTAGRAM
            ================================================= */}

            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow BM KONXEPT LTD on Instagram"
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <Instagram
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <ArrowRight
                  className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Instagram
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                @bmkonxept
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Follow BM KONXEPT for creative work, projects and updates.
              </p>
            </a>

            {/* =================================================
                TIKTOK
            ================================================= */}

            <a
              href={company.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow BM KONXEPT LTD on TikTok"
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <Music2
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <ArrowRight
                  className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                TikTok
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                @bmkonxept
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Follow BM KONXEPT on TikTok for creative content and updates.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT ENQUIRY
      ===================================================== */}

      <section
        aria-labelledby="project-enquiry-heading"
        className="px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* LEFT */}

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Project enquiry
            </p>

            <h2
              id="project-enquiry-heading"
              className="text-4xl font-black tracking-tight sm:text-6xl"
            >
              Tell us about your{" "}
              <span className="gold-text">project.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-white/45">
              Give us a few details about what you want to create. We'll use
              your information to start the conversation on WhatsApp.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Fast communication
                  </p>

                  <p className="text-xs text-white/35">
                    Continue your enquiry directly on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <Send
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Clear project details
                  </p>

                  <p className="text-xs text-white/35">
                    Tell us what you need before starting the conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6">
              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/45"
                >
                  Name / Business
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name or business name"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-gold/50 focus:bg-black/60"
                />
              </div>

              {/* SERVICE */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/45"
                >
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(event) =>
                    setSelectedService(event.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
                >
                  <option value="" className="bg-black">
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-black"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* DETAILS */}

              <div>
                <label
                  htmlFor="details"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/45"
                >
                  Project details
                </label>

                <textarea
                  id="details"
                  name="details"
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  rows={7}
                  placeholder="Tell us about your project, what you want designed, quantity, deadline, preferred style, or any other important details..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-gold/50 focus:bg-black/60"
                />
              </div>

              {/* BUTTON */}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Send your BM KONXEPT LTD project enquiry on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
              >
                <MessageCircle
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                Send Enquiry on WhatsApp

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>

              <p className="text-center text-xs leading-5 text-white/25">
                Your enquiry will open in WhatsApp with the information you
                provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL NAVIGATION
      ===================================================== */}

      <section
        aria-labelledby="contact-explore-heading"
        className="px-5 pb-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Explore BM KONXEPT LTD
            </p>

            <h2
              id="contact-explore-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl"
            >
              Explore our services, work and story.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/45">
              Learn more about BM KONXEPT LTD, explore our current creative
              services and view selected branding and design projects.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                aria-label="Explore BM KONXEPT LTD creative services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                Explore Services

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

              <Link
                href="/about"
                aria-label="Learn about BM KONXEPT LTD"
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
          FINAL CTA
      ===================================================== */}

      <section
        aria-labelledby="contact-cta-heading"
        className="px-5 pb-24 md:px-8 md:pb-32"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.14] to-white/[0.025] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Innovate • Connect • Elevate
              </p>

              <h2
                id="contact-cta-heading"
                className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl"
              >
                Have an idea?{" "}
                <span className="gold-text">Let's make it happen.</span>
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/45">
                BM KONXEPT is ready to help you create professional,
                memorable and effective visual communication.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Start a project with BM KONXEPT LTD on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle
                className="h-5 w-5"
                aria-hidden="true"
              />

              Start a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
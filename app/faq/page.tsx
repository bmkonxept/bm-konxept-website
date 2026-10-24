
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BM KONXEPT LTD",
  description:
    "Find answers to common questions about BM KONXEPT LTD services, design revisions, delivery, pricing, cancellations, and project policies.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | BM KONXEPT LTD",
    description:
      "Learn about our creative services, project process, revisions, delivery, and business policies.",
    url: `${siteUrl}/faq`,
    siteName: "BM KONXEPT LTD",
    locale: "en_NG",
    type: "website",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faqpage`,
    url: `${siteUrl}/faq`,
    name: "Frequently Asked Questions | BM KONXEPT LTD",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who leads BM KONXEPT LTD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luyah Ola serves as the Lead Creative, guiding the company's creative direction and design work.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative overflow-hidden px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Help and information
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-white/55">
            Have questions about working with BM KONXEPT LTD? Browse the
            answers below or contact us to discuss your project.
          </p>

          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-black transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Ask us on WhatsApp
          </a>
        </div>
      </section>

      <FAQSection showViewAll={false} />

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
          <h2 className="text-2xl font-bold">
            Still have a question?
          </h2>

          <p className="mt-3 leading-7 text-white/55">
            Contact our team with your project requirements, and we’ll
            discuss the next steps with you.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-gold/40 px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            Contact BM KONXEPT LTD
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

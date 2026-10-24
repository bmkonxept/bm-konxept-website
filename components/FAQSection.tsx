
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

type FAQSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export default function FAQSection({
  limit,
  showViewAll = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items =
    typeof limit === "number" ? faqItems.slice(0, limit) : faqItems;

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Frequently asked questions
          </p>

          <h2
            id="faq-section-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Questions? We’re here to help.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/50">
            Find answers about our creative services, project process,
            revisions, delivery, and business policies.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-gold/35 bg-gold/[0.035]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-semibold leading-6 text-white/90">
                      {item.question}
                    </span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-5 pb-5 sm:px-6"
                  >
                    <p className="border-t border-white/10 pt-4 text-sm leading-7 text-white/60">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
            >
              View all FAQs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

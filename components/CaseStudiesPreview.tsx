"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Anna Scent",
    category: "Branding & Visual Design",
    description:
      "A visual design showcase created for Anna Scent, presenting the brand through a polished and consistent visual identity.",
    image:
      "/assets/case-studies/case-study-anna-scent/20260219-191631.webp",
  },
  {
    title: "Djados Threadlines",
    category: "Brand Identity",
    description:
      "A branding showcase highlighting the visual identity created for Djados Threadlines.",
    image:
      "/assets/case-studies/case-study-djados-threadlines/20260220-145947.webp",
  },
  {
    title: "FOGSU FUTMX Bus Transit",
    category: "Advertising & Promotional Design",
    description:
      "A promotional design showcase for FOGSU FUTMX Bus Transit, presenting its transport-related communication materials.",
    image:
      "/assets/case-studies/case-study-fogsu-futmx-bus-transit/20260809-190925.webp",
  },
  {
    title: "FOGSU Hiking 2026",
    category: "Event Design",
    description:
      "An event-design showcase featuring promotional artwork created for the FOGSU Hiking 2026 event.",
    image:
      "/assets/case-studies/case-study-fogsu-hiking-2026-flyer-design/20260606-064842.webp",
  },
  {
    title: "Juda Beads",
    category: "Branding & Promotional Design",
    description:
      "A visual design showcase featuring creative materials developed for Juda Beads.",
    image:
      "/assets/case-studies/case-study-juda-beads/20260226-221914.webp",
  },
  {
    title: "NAEEES Executive ID Cards",
    category: "Print Design",
    description:
      "An ID-card design and printing showcase for NAEEES executive identification materials.",
    image:
      "/assets/case-studies/case-study-naeees-executive-id-card-design-and-printing/20261013-073201.webp",
  },
  {
    title: "Peculiar Family",
    category: "Visual Design",
    description:
      "A creative design showcase featuring visual materials produced for Peculiar Family.",
    image:
      "/assets/case-studies/case-study-peculiar-family/20250826-234324.webp",
  },
];

export default function CaseStudiesPreview() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToStudy = useCallback((index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];
    const target = cards[index];

    if (!target) return;

    carousel.scrollTo({
      left: target.offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];

    if (!cards.length) return;

    const scrollPosition =
      carousel.scrollLeft + cards[0].offsetLeft;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const goToPrevious = () => {
    scrollToStudy(Math.max(0, activeIndex - 1));
  };

  const goToNext = () => {
    scrollToStudy(
      Math.min(caseStudies.length - 1, activeIndex + 1),
    );
  };

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="overflow-hidden bg-[#050505] py-20 text-[#f7f5ee] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Selected work
            </p>

            <h2
              id="case-studies-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Selected Case Studies
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Discover selected projects that demonstrate our approach
              to branding, promotional design, event graphics and print
              design.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center gap-2 border-b border-[#d4af37] pb-2 text-sm font-semibold text-[#d4af37] transition-colors hover:text-white"
          >
            Explore all projects
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            aria-label="Selected case studies carousel"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="group w-[85vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-[#d4af37]/50 sm:w-[340px] lg:w-[360px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <Image
                    src={study.image}
                    alt={`${study.title} — ${study.category} case study by BM KONXEPT LTD`}
                    fill
                    sizes="(max-width: 640px) 85vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                    {study.category}
                  </p>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {study.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-5">
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Choose a case study"
            >
              {caseStudies.map((study, index) => (
                <button
                  key={study.title}
                  type="button"
                  onClick={() => scrollToStudy(index)}
                  aria-label={`Go to case study ${index + 1}: ${study.title}`}
                  aria-current={activeIndex === index ? "step" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#d4af37]"
                      : "w-2.5 bg-white/25 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="mr-1 text-sm tabular-nums text-white/55">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(caseStudies.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={goToPrevious}
                disabled={activeIndex === 0}
                aria-label="Previous case study"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                disabled={activeIndex === caseStudies.length - 1}
                aria-label="Next case study"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-5 text-xs text-white/40 sm:hidden">
          Swipe left or right to explore our selected case studies.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  Image as ImageIcon,
  Share2,
  CreditCard,
  BookOpen,
  Package,
  LayoutGrid,
  Flag,
  Building2,
  Printer,
  Megaphone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description:
      "We create distinctive logos that help your business establish a recognizable identity and make a professional first impression.",
    benefit: "Build recognition and a consistent visual identity.",
    bestFor: "Startups, established businesses, organizations and personal brands.",
    icon: Palette,
  },
  {
    title: "Flyer & Poster Design",
    description:
      "We design clear, eye-catching flyers and posters to communicate offers, announcements, events and promotional messages.",
    benefit: "Present important information in an attractive, easy-to-understand format.",
    bestFor: "Business promotions, events, campaigns and announcements.",
    icon: ImageIcon,
  },
  {
    title: "Social Media Graphics",
    description:
      "We create branded social media visuals that help your content look professional and communicate effectively with your audience.",
    benefit: "Maintain a recognizable and consistent online appearance.",
    bestFor: "Businesses, creators, brands and organizations.",
    icon: Share2,
  },
  {
    title: "Business Cards & Stationery",
    description:
      "We design professional business cards, letterheads and stationery that keep your business communication consistent.",
    benefit: "Make professional introductions and present a unified brand.",
    bestFor: "Business owners, professionals, offices and organizations.",
    icon: CreditCard,
  },
  {
    title: "Brochures & Company Profiles",
    description:
      "We organize your business information into polished documents that introduce your company, explain your services and present your strengths.",
    benefit: "Help customers and partners understand what your business offers.",
    bestFor: "Companies, institutions, service providers and organizations.",
    icon: BookOpen,
  },
  {
    title: "Packaging & Product Labels",
    description:
      "We design product packaging and labels that communicate essential product information while reflecting your brand's visual identity.",
    benefit: "Give products a more professional and recognizable presentation.",
    bestFor: "Product-based businesses, manufacturers and small businesses.",
    icon: Package,
  },
  {
    title: "Catalogue Design",
    description:
      "We arrange your products or services into an organized catalogue that makes your offerings easier to browse and understand.",
    benefit: "Present multiple products or services in one clear format.",
    bestFor: "Retailers, vendors, product brands and service businesses.",
    icon: LayoutGrid,
  },
  {
    title: "Roll-up Banners",
    description:
      "We create professional banner designs that communicate your brand message clearly in physical spaces and at events.",
    benefit: "Make your key message visible in promotional and presentation settings.",
    bestFor: "Exhibitions, conferences, shops, offices and events.",
    icon: Flag,
  },
  {
    title: "Corporate Branding",
    description:
      "We help businesses maintain a consistent visual presentation across selected brand materials and customer touchpoints.",
    benefit: "Strengthen brand consistency, credibility and recognition.",
    bestFor: "Growing businesses, companies and professional organizations.",
    icon: Building2,
  },
  {
    title: "Printing Services",
    description:
      "We provide printing support for agreed design projects and business communication materials, subject to the project specifications.",
    benefit: "Bring approved designs into physical form when printing is included in your quotation.",
    bestFor: "Business cards, flyers, stationery and other agreed print materials.",
    icon: Printer,
  },
  {
    title: "Marketing & Advertising Materials",
    description:
      "We design promotional materials that help businesses communicate offers, showcase products and support their advertising campaigns.",
    benefit: "Deliver a clear, consistent message across promotional materials.",
    bestFor: "Product launches, sales promotions, campaigns and business announcements.",
    icon: Megaphone,
  },
];

export default function ServiceCards() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const updateActiveIndex = useCallback(() => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-service-card]")
    );

    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  const goToService = useCallback((index: number) => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    const target = cards[index];

    if (!target) return;

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }, []);

  const goToPrevious = () => {
    goToService(Math.max(0, activeIndex - 1));
  };

  const goToNext = () => {
    goToService(Math.min(services.length - 1, activeIndex + 1));
  };

  return (
    <div className="w-full">
      {/* Carousel navigation: mobile and tablet */}
      <div className="mb-5 flex items-center justify-between gap-4 lg:hidden">
        <p className="text-sm text-white/50">
          <span className="font-semibold text-gold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(services.length).padStart(2, "0")}
          <span className="ml-2">services</span>
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            aria-label="View previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            disabled={activeIndex === services.length - 1}
            aria-label="View next service"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Services: swipe horizontally on smaller screens, grid on desktop */}
      <div
        ref={carouselRef}
        onScroll={updateActiveIndex}
        role="region"
        aria-label="Our design and printing services"
        className={[
          "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5",
          "scrollbar-none",
          "sm:gap-5",
          "lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0",
        ].join(" ")}
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              data-service-card
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.2),
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className={[
                "group relative flex shrink-0 snap-start flex-col",
                "w-[86%] min-w-0 sm:w-[calc(50%-0.625rem)]",
                "lg:w-auto",
                "overflow-hidden rounded-3xl border border-white/10",
                "bg-white/[0.025] p-6 sm:p-7",
                "transition-colors duration-300",
                "hover:border-gold/35 hover:bg-gold/[0.035]",
                "focus-within:border-gold/40",
              ].join(" ")}
            >
              {/* Decorative background glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/[0.045] blur-3xl transition-colors duration-500 group-hover:bg-gold/[0.09]"
              />

              <div className="relative flex h-full flex-col">
                {/* Icon and service number */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/[0.10]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/25">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Service information */}
                <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {service.description}
                </p>

                {/* Client benefit */}
                <div className="mt-5 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    How it helps
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {service.benefit}
                  </p>
                </div>

                {/* Best-fit clients */}
                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Ideal for
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {service.bestFor}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-7 h-px w-10 bg-gold/35 transition-all duration-300 group-hover:w-20 group-hover:bg-gold"
                />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Carousel progress indicators */}
      <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            onClick={() => goToService(index)}
            aria-label={`Go to service ${index + 1}: ${service.title}`}
            aria-current={activeIndex === index ? "step" : undefined}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              activeIndex === index
                ? "w-7 bg-gold"
                : "w-1.5 bg-white/25 hover:bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs leading-6 text-white/35 lg:hidden">
        Swipe to explore our services.
      </p>
    </div>
  );
}

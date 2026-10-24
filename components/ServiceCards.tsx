
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
  Building2,
  Printer,
  Megaphone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description:
      "A distinctive visual mark that helps people recognise your business, organisation or personal brand.",
    whatWeDo:
      "We develop logo concepts around your business name, audience, industry and preferred creative direction, then refine the selected concept.",
    deliverables: [
      "Final logo artwork in PNG format.",
      "Agreed logo variations and colour treatments.",
      "Additional file formats where agreed before the project.",
    ],
    benefit:
      "Builds brand recognition and gives your business a consistent, professional first impression.",
    bestFor:
      "Startups, established businesses, organisations and personal brands.",
    icon: Palette,
  },
  {
    title: "Flyer & Poster Design",
    description:
      "Promotional designs for products, services, offers, events and announcements.",
    whatWeDo:
      "We arrange your message, images, branding and contact information into clear, attractive promotional layouts. Roll-up banner design is included under this service.",
    deliverables: [
      "Final flyer or poster artwork in the agreed format.",
      "Design dimensions suited to the intended use.",
      "Roll-up banner artwork prepared to supplied specifications when requested.",
    ],
    benefit:
      "Helps communicate offers and announcements clearly, attract attention and support promotional activities.",
    bestFor:
      "Business promotions, events, product launches, campaigns and announcements.",
    icon: ImageIcon,
  },
  {
    title: "Social Media Graphics",
    description:
      "Branded visuals that help your social media content look professional and communicate clearly.",
    whatWeDo:
      "We design promotional posts, announcements, campaign graphics and coordinated visual content for your selected platforms.",
    deliverables: [
      "Final social media graphics in PNG format.",
      "Agreed sizes and variations for the selected platforms.",
      "Additional formats or adaptations where agreed.",
    ],
    benefit:
      "Creates a consistent online appearance and helps audiences recognise your business across social platforms.",
    bestFor:
      "Businesses, creators, product brands and organisations.",
    icon: Share2,
  },
  {
    title: "Business Cards & Stationery",
    description:
      "Branded materials that make everyday business communication look consistent and professional.",
    whatWeDo:
      "We design business cards, letterheads, envelopes and other agreed stationery using your business identity and supplied details.",
    deliverables: [
      "Final artwork for the selected stationery items.",
      "Layouts prepared for the agreed dimensions.",
      "Print-ready files where agreed.",
    ],
    benefit:
      "Helps you make professional introductions and present a consistent identity across business documents.",
    bestFor:
      "Business owners, professionals, offices and organisations.",
    icon: CreditCard,
  },
  {
    title: "Brochures & Company Profiles",
    description:
      "Professionally organised documents that introduce your company and explain what your business offers.",
    whatWeDo:
      "We arrange your supplied business information, images and service details into a structured, branded document.",
    deliverables: [
      "A designed brochure or company profile.",
      "An agreed page layout and visual style.",
      "The final digital or print-ready format agreed for the project.",
    ],
    benefit:
      "Helps customers, prospective partners and other stakeholders understand your business, services and capabilities.",
    bestFor:
      "Companies, institutions, service providers and organisations.",
    icon: BookOpen,
  },
  {
    title: "Packaging & Product Labels",
    description:
      "Product packaging and label artwork that reflects your brand and presents product information clearly.",
    whatWeDo:
      "We develop visual layouts based on your product, brand identity, supplied content and production specifications.",
    deliverables: [
      "Agreed packaging or product label artwork.",
      "Design dimensions based on the supplied specifications.",
      "Print-ready artwork where agreed.",
    ],
    benefit:
      "Improves product presentation and supports brand recognition at the point of sale.",
    bestFor:
      "Product-based businesses, manufacturers and small businesses.",
    icon: Package,
  },
  {
    title: "Catalogue Design",
    description:
      "An organised presentation of products or services that makes your offerings easier to browse.",
    whatWeDo:
      "We arrange your supplied product images, descriptions, categories and prices into a clear catalogue layout.",
    deliverables: [
      "A designed product or service catalogue.",
      "Organised product or service sections.",
      "The agreed digital or print-ready final format.",
    ],
    benefit:
      "Makes it easier for customers to browse your offerings and understand the available products or services.",
    bestFor:
      "Retailers, vendors, product brands and service businesses.",
    icon: LayoutGrid,
  },
  {
    title: "Corporate Branding",
    description:
      "A coordinated visual identity across the business materials your organisation uses.",
    whatWeDo:
      "We develop or refine brand visuals and apply agreed identity elements across selected business materials.",
    deliverables: [
      "The agreed branding assets and designs.",
      "Selected logo applications and branded materials.",
      "Colour, typography or visual guidance where included in the quotation.",
    ],
    benefit:
      "Supports a coherent, recognisable and professional presentation across customer touchpoints.",
    bestFor:
      "Growing businesses, companies and professional organisations.",
    icon: Building2,
  },
  {
    title: "Printing Services",
    description:
      "Physical production of selected business and promotional materials, subject to the agreed quotation.",
    whatWeDo:
      "We discuss the required item, quantity, dimensions, material and finish to establish the printing specifications.",
    deliverables: [
      "The printed items specified in the approved quotation.",
      "Agreed quantities, materials and finishes.",
      "Production based on the approved artwork and specifications.",
    ],
    benefit:
      "Turns approved designs into physical materials for business communication, promotion and distribution.",
    bestFor:
      "Clients requiring business cards, flyers, stationery and other agreed print materials.",
    icon: Printer,
  },
  {
    title: "Marketing & Advertising Materials",
    description:
      "Creative materials that support business promotions and advertising campaigns.",
    whatWeDo:
      "We design agreed promotional assets, such as campaign graphics, product promotions and other advertising materials.",
    deliverables: [
      "The agreed promotional designs.",
      "Final artwork in the specified formats and dimensions.",
      "Related design variations where included in the quotation.",
    ],
    benefit:
      "Helps communicate campaign messages clearly and maintain a consistent look across promotional materials.",
    bestFor:
      "Product launches, sales promotions, campaigns and business announcements.",
    icon: Megaphone,
  },
];

const quotationLabels: Record<string, string> = {
  "Logo Design": "Logo Design",
  "Flyer & Poster Design": "Flyer & Poster Design (including roll-up banners)",
  "Social Media Graphics": "Social Media Graphics",
  "Business Cards & Stationery": "Business Cards & Stationery",
  "Brochures & Company Profiles": "Brochures & Company Profiles",
  "Packaging & Product Labels": "Packaging & Product Labels",
  "Catalogue Design": "Catalogue Design",
  "Corporate Branding": "Corporate Branding",
  "Printing Services": "Printing Services",
  "Marketing & Advertising Materials": "Marketing & Advertising Materials",
};

export default function ServiceCards() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<string | null>(null);
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
      behavior: reduceMotion ? "auto" : "smooth",
    });

    setActiveIndex(index);
  }, [reduceMotion]);

  const goToPrevious = () => {
    goToService(Math.max(0, activeIndex - 1));
  };

  const goToNext = () => {
    goToService(Math.min(services.length - 1, activeIndex + 1));
  };

  const toggleService = (title: string) => {
    setExpandedService((current) => (current === title ? null : title));
  };

  return (
    <div className="w-full">
      {/* Carousel navigation on mobile and tablet */}
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

      {/* Swipeable service cards on smaller screens; grid on desktop */}
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
          const isExpanded = expandedService === service.title;
          const panelId = `service-details-${index + 1}`;

          return (
            <motion.article
              key={service.title}
              data-service-card
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.2),
              }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
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
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/[0.045] blur-3xl transition-colors duration-500 group-hover:bg-gold/[0.09]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/[0.10]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/25">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {service.description}
                </p>

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

                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Ideal for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {service.bestFor}
                  </p>
                </div>

                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleService(service.title)}
                  className="mt-6 flex w-full items-center justify-between gap-3 rounded-xl border border-gold/25 bg-gold/[0.045] px-4 py-3 text-left text-sm font-semibold text-gold transition-colors hover:border-gold/50 hover:bg-gold/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span>
                    {isExpanded ? "Show less" : "Explore service details"}
                  </span>
                  <ChevronDown
                    className={[
                      "h-4 w-4 shrink-0 transition-transform duration-200",
                      isExpanded ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div
                    id={panelId}
                    className="mt-5 space-y-5 border-t border-white/10 pt-5"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-gold">
                        What this service is
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gold">
                        What we do
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {service.whatWeDo}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gold">
                        What you receive
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex items-start gap-2 text-sm leading-6 text-white/65"
                          >
                            <CheckCircle2
                              className="mt-1 h-4 w-4 shrink-0 text-gold"
                              aria-hidden="true"
                            />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gold">
                        Business benefits
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {service.benefit}
                      </p>
                    </div>

                    <a
                      href={`/contact?service=${encodeURIComponent(
                        quotationLabels[service.title] ?? service.title
                      )}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Request a Quotation
                      <ArrowUpRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>

                    <p className="text-xs leading-5 text-white/40">
                      Final deliverables, file formats, revisions, pricing and
                      turnaround are confirmed in your quotation.
                    </p>
                  </div>
                )}

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

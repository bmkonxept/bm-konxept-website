"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Image,
  Share2,
  CreditCard,
  BookOpen,
  Package,
  LayoutGrid,
  Flag,
  Building2,
  Printer,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description:
      "Professional logo designs that give your business a memorable and distinctive visual identity.",
    icon: Palette,
  },
  {
    title: "Flyer & Poster Design",
    description:
      "Eye-catching promotional designs for businesses, events, campaigns and announcements.",
    icon: Image,
  },
  {
    title: "Social Media Graphics",
    description:
      "Creative social media visuals designed to communicate your message and strengthen your online presence.",
    icon: Share2,
  },
  {
    title: "Business Cards & Stationery",
    description:
      "Professional business cards, letterheads and stationery that keep your brand consistent.",
    icon: CreditCard,
  },
  {
    title: "Brochures & Company Profiles",
    description:
      "Well-structured corporate materials that present your business, services and story professionally.",
    icon: BookOpen,
  },
  {
    title: "Packaging & Product Labels",
    description:
      "Creative packaging and product label designs that help products stand out and communicate clearly.",
    icon: Package,
  },
  {
    title: "Catalogue Design",
    description:
      "Organized and attractive catalogues for showcasing products, services and collections.",
    icon: LayoutGrid,
  },
  {
    title: "Roll-up Banners",
    description:
      "Professional roll-up banner designs for exhibitions, events, offices, promotions and presentations.",
    icon: Flag,
  },
  {
    title: "Corporate Branding",
    description:
      "Consistent visual branding solutions that help businesses build recognition and credibility.",
    icon: Building2,
  },
  {
    title: "Printing Services",
    description:
      "Quality printing support for business materials, promotional designs, corporate documents and more.",
    icon: Printer,
  },
  {
    title: "Marketing & Advertising Materials",
    description:
      "Creative promotional materials designed to help businesses communicate, promote and connect with their audience.",
    icon: Megaphone,
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.035] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            {/* Background glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/[0.05] blur-3xl transition-all duration-500 group-hover:bg-gold/[0.10]" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/[0.10]">
                <Icon className="h-5 w-5" />
              </div>

              {/* Number */}
              <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
                Service {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-gold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-white/45">
                {service.description}
              </p>

              {/* Bottom line */}
              <div className="mt-7 h-px w-10 bg-gold/30 transition-all duration-300 group-hover:w-20 group-hover:bg-gold" />
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
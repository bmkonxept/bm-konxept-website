
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/site";

const categories = [
  "All",
  "Branding",
  "Advertising",
  "Social Media",
  "Event Design",
  "Print Design",
  "Stationery",
];

export default function PortfolioGrid({
  limit,
}: {
  limit?: number;
}) {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? portfolio
      : portfolio.filter((project) => project.category === filter);

  const items = limit
    ? filteredItems.slice(0, limit)
    : filteredItems;

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap justify-center gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => {
          const active = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={active}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-gold text-black shadow-[0_0_25px_rgba(212,175,55,0.18)]"
                  : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-gold/40 hover:bg-gold/[0.05] hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout">
          {items.map((project, index) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.03, 0.3),
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title}, a ${project.category} project`}
                className="block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} project by BM KONXEPT LTD`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div
                    className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute bottom-4 left-4 translate-y-3 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    View Project →
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                    {project.category}
                  </div>

                  <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-gold">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/45">
                    {project.description}
                  </p>

                  <p className="sr-only">
                    {project.title} is a{" "}
                    {project.category.toLowerCase()} project in the BM
                    KONXEPT LTD creative portfolio.
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <div
          className="rounded-2xl border border-white/10 bg-white/[0.02] py-16 text-center"
          role="status"
        >
          <p className="text-white/50">
            No projects available in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}

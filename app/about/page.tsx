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

export default function About() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/[0.06] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="eyebrow">About BM KONXEPT</p>

            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
              We help businesses{" "}
              <span className="gold-text">look as good as they work.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
              {company.name} is a creative branding, marketing, advertising,
              printing and business communication company focused on helping
              businesses communicate, promote and present themselves
              professionally.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to BM KONXEPT
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Who we are</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
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
              At BM KONXEPT, we believe design is more than making something
              look attractive. Good creative work should communicate an idea,
              establish trust and help people understand what a business
              represents.
            </p>

            <p>
              We work across branding, promotional graphics, social media
              creatives, event designs, corporate materials, printing and
              other visual communication needs.
            </p>

            <p>
              Whether you are building a new identity, promoting an event,
              launching a product or strengthening your business presence, we
              aim to create work that is clear, memorable and professionally
              presented.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">What drives us</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Purpose behind the{" "}
              <span className="gold-text">creative.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.10] to-white/[0.02] p-8 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold">
                  <Target className="h-5 w-5" />
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

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gold">
                  <Eye className="h-5 w-5" />
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

      {/* VALUES */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow">Our values</p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
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
                    <Icon className="h-5 w-5" />
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

      {/* LEAD CREATIVE */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="eyebrow">Creative leadership</p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
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

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Innovate • Connect • Elevate
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-black transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Start a Project
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/80 transition hover:border-gold/40 hover:text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Palette,
  Megaphone,
  Printer,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/Footer";
import { company, services } from "@/data/site";

const serviceIcons = [Palette, Megaphone, Printer];

export default function Services() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,.14),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(20,70,130,.10),transparent_30%)]" />

        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            BM KONXEPT creative services
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Creative solutions that help your brand{" "}
            <span className="gold-text">
              show up professionally.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            From identity and promotional graphics to business stationery,
            print and advertising materials, BM KONXEPT creates visual
            solutions built around your goals.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="h-4 w-4" />
              Discuss Your Project
            </a>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-white/80 transition duration-300 hover:border-gold/40 hover:bg-gold/[0.04] hover:text-white"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/30">
            <span>Branding</span>
            <span>Design</span>
            <span>Printing</span>
            <span>Advertising</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white/[0.025] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              What we do
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Services designed around{" "}
              <span className="text-white/40">
                your brand.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Whether you are building a new identity, promoting a product,
              preparing an event, or producing professional business
              materials, we create solutions that communicate clearly.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/20 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:scale-105 group-hover:border-gold/40 group-hover:bg-gold/15">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:border-gold/30 group-hover:text-gold">
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70">
                      BM KONXEPT
                    </p>

                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/55">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mt-7 h-px w-full overflow-hidden bg-white/10">
                    <div className="h-full w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Our approach
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple process.{" "}
              <span className="text-white/40">
                Professional results.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Tell us what you need
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Share your idea, project goals, audience, preferred style,
                timeline, and any important details.
              </p>
            </div>

            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                We create
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                We turn your requirements into clear, attractive, and
                professional creative work.
              </p>
            </div>

            <div className="card p-7">
              <div className="text-sm font-bold text-gold">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                You elevate
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Receive polished creative assets prepared for your intended
                digital or print use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.16] to-white/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Start a project
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                Ready to bring your idea to life?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/55">
                Tell BM KONXEPT what you are working on and let's create
                something professional, memorable, and built around your
                goals.
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp BM KONXEPT
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
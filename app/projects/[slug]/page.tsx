import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import { portfolio, company } from "@/data/site";

export function generateStaticParams() {
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = portfolio.findIndex((p) => p.slug === slug);
  const project = portfolio[projectIndex];

  if (!project) {
    return notFound();
  }

  const previousProject =
    projectIndex > 0 ? portfolio[projectIndex - 1] : null;

  const nextProject =
    projectIndex < portfolio.length - 1
      ? portfolio[projectIndex + 1]
      : null;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">{project.category}</p>

              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                {project.description}
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-black transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Start a similar project
            </a>
          </div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl sm:p-5">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={2000}
              className="mx-auto h-auto max-h-[85vh] w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">
              Category
            </p>

            <p className="mt-3 text-lg font-semibold text-gold">
              {project.category}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">
              Project
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              {project.title}
            </p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group inline-flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />

                <span>
                  Previous
                  <span className="ml-2 text-white/80">
                    {previousProject.title}
                  </span>
                </span>
              </Link>
            ) : (
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                All projects
              </Link>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-right text-sm text-white/50 transition hover:text-white"
              >
                <span>
                  Next
                  <span className="ml-2 text-white/80">
                    {nextProject.title}
                  </span>
                </span>

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
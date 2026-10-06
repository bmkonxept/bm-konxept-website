import type { Metadata } from "next";
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

const siteUrl = "https://bmkonxept.com";

export function generateStaticParams() {
  return portfolio.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectParams = {
  slug: string;
};

function getProjectImageUrl(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | BM KONXEPT LTD",
      description:
        "The requested BM KONXEPT LTD portfolio project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} | BM KONXEPT LTD Portfolio`;

  const description =
    project.description ||
    `${project.title} is a ${project.category.toLowerCase()} design project created by BM KONXEPT LTD in Nigeria.`;

  const imageUrl = getProjectImageUrl(project.image);

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} BM KONXEPT`,
      project.category,
      `${project.category} Nigeria`,
      "BM KONXEPT",
      "BM KONXEPT LTD",
      "creative design Nigeria",
      "graphic design Nigeria",
      "branding Nigeria",
    ],
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
      siteName: "BM KONXEPT LTD",
      locale: "en_NG",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 2000,
          alt: `${project.title} — ${project.category} design project by BM KONXEPT LTD`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;

  const projectIndex = portfolio.findIndex(
    (project) => project.slug === slug
  );

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

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const imageUrl = getProjectImageUrl(project.image);

  const projectDescription =
    project.description ||
    `${project.title} is a ${project.category.toLowerCase()} design project created by BM KONXEPT LTD in Nigeria.`;

  /*
   * =========================================================
   * CREATIVE WORK ENTITY
   * =========================================================
   */

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#creativework`,
    url: projectUrl,
    name: project.title,
    description: projectDescription,
    image: imageUrl,
    genre: project.category,
    creator: {
      "@id": `${siteUrl}/#organization`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    isPartOf: {
      "@id": `${siteUrl}/portfolio/#webpage`,
    },
    mainEntityOfPage: {
      "@id": `${projectUrl}#webpage`,
    },
    inLanguage: "en-NG",
  };

  /*
   * =========================================================
   * BREADCRUMB ENTITY
   * =========================================================
   */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${projectUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteUrl}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  /*
   * =========================================================
   * WEB PAGE ENTITY
   * =========================================================
   */

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${projectUrl}#webpage`,
    url: projectUrl,
    name: `${project.title} | BM KONXEPT LTD Portfolio`,
    description: projectDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${projectUrl}#creativework`,
    },
    mainEntity: {
      "@id": `${projectUrl}#creativework`,
    },
    breadcrumb: {
      "@id": `${projectUrl}#breadcrumb`,
    },
    inLanguage: "en-NG",
  };

  return (
    <main className="pt-24">
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            projectSchema,
            breadcrumbSchema,
            webPageSchema,
          ]),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="px-5 py-16 md:px-8 md:py-24"
        aria-labelledby="project-heading"
      >
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-gold"
          >
            <ArrowLeft
              className="h-4 w-4"
              aria-hidden="true"
            />
            Back to portfolio
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">{project.category}</p>

              <h1
                id="project-heading"
                className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
              >
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                {projectDescription}
              </p>
            </div>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label={`Start a similar ${project.category.toLowerCase()} project with BM KONXEPT`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-black transition hover:scale-[1.02]"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />
              Start a similar project
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN PROJECT IMAGE
      ===================================================== */}

      <section
        className="px-5 pb-20 md:px-8 md:pb-28"
        aria-labelledby="project-image-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="project-image-heading" className="sr-only">
            {project.title} project preview
          </h2>

          <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl sm:p-5">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} design project by BM KONXEPT LTD`}
              width={1600}
              height={2000}
              className="mx-auto h-auto max-h-[85vh] w-full object-contain"
              priority
            />

            <figcaption className="sr-only">
              {project.title}, a {project.category.toLowerCase()} design
              project from the BM KONXEPT LTD creative portfolio.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <section
        className="px-5 pb-20 md:px-8 md:pb-28"
        aria-labelledby="project-information-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="project-information-heading"
            className="sr-only"
          >
            Project information
          </h2>

          <div className="grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
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
        </div>
      </section>

      {/* =====================================================
          PROJECT CONTEXT
      ===================================================== */}

      <section
        className="px-5 pb-20 md:px-8 md:pb-24"
        aria-labelledby="project-context-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              BM KONXEPT LTD portfolio
            </p>

            <h2
              id="project-context-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {project.title} — {project.category}
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              This project is part of the BM KONXEPT LTD creative
              portfolio, showcasing visual communication and design
              work across branding, advertising, social media,
              event design and print design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Explore More Portfolio Work
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Explore BM KONXEPT Services
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT NAVIGATION
      ===================================================== */}

      <section
        className="px-5 pb-24 md:px-8"
        aria-labelledby="project-navigation-heading"
      >
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
          <h2 id="project-navigation-heading" className="sr-only">
            Portfolio project navigation
          </h2>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                aria-label={`View previous project: ${previousProject.title}`}
                className="group inline-flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <ArrowLeft
                  className="h-4 w-4 transition group-hover:-translate-x-1"
                  aria-hidden="true"
                />

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
                <ArrowLeft
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                All projects
              </Link>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                aria-label={`View next project: ${nextProject.title}`}
                className="group inline-flex items-center gap-3 text-right text-sm text-white/50 transition hover:text-white"
              >
                <span>
                  Next
                  <span className="ml-2 text-white/80">
                    {nextProject.title}
                  </span>
                </span>

                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white"
              >
                Start a project
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
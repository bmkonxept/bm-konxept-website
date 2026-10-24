
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | BM KONXEPT LTD",
  description:
    "Read the terms governing the use of the BM KONXEPT LTD website and our creative design, branding, advertising and printing services.",
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. About These Terms",
    paragraphs: [
      "These Terms & Conditions explain the general terms for using the BM KONXEPT LTD website and engaging our creative services. By using this website or proceeding with a project, you agree to the terms that apply to your activity and any separate agreement made with us.",
      "BM KONXEPT LTD is a Nigerian creative branding, graphic design, advertising, printing and business communication company. These terms should be read alongside any project quotation, written approval or specific agreement provided for your order.",
    ],
  },
  {
    title: "2. Our Services",
    paragraphs: [
      "Our services may include logo design, branding, flyer and poster design, social media graphics, business cards, stationery, event graphics, advertising designs and agreed printing services.",
      "The exact scope, deliverables, specifications, price and delivery schedule for each project will be agreed before work begins. A service or feature not included in an accepted quotation is not automatically part of the project.",
    ],
  },
  {
    title: "3. Quotations and Payments",
    paragraphs: [
      "Project prices and payment arrangements are agreed on a case-by-case basis and confirmed in the quotation or project agreement. Work may begin after any required initial payment or other agreed starting condition has been met.",
      "Additional requests, changes to the approved brief, extra deliverables, paid assets, printing expenses and urgent delivery may attract additional charges. We will communicate applicable charges for approval before proceeding with the additional work.",
      "Bulk-order discounts, where available, depend on the order and will be confirmed separately.",
    ],
  },
  {
    title: "4. Design Revisions and Approval",
    paragraphs: [
      "Unless a different arrangement is agreed in writing, a standard design project includes two rounds of revisions. Additional revision rounds or substantial changes to an approved brief may incur extra charges.",
      "Clients are responsible for reviewing drafts, spelling, names, contact details, dimensions and other supplied information. We request client approval before final delivery. Once a design has been approved, further changes may be treated as additional work.",
    ],
  },
  {
    title: "5. Delivery and Final Files",
    paragraphs: [
      "The expected turnaround time will be agreed for each project. Delivery may depend on timely payment, receipt of required content, client feedback and approval.",
      "Unless another format is agreed, final digital design deliverables are supplied in PNG format. Other formats, editable source files and working files are not automatically included and may require a separate agreement or fee.",
      "Urgent delivery may be accepted subject to availability and may attract an additional fee. Printing arrangements, quantities, production timelines and related costs are agreed separately for each order.",
    ],
  },
  {
    title: "6. Client Responsibilities",
    paragraphs: [
      "Clients should provide accurate project information, usable materials, timely feedback and the necessary approvals. Clients must ensure they have permission to use any logos, photographs, text, fonts or other materials they supply.",
      "Delays caused by missing content, late feedback, unapproved drafts or incomplete payments may affect the agreed delivery schedule.",
    ],
  },
  {
    title: "7. Intellectual Property and Permitted Use",
    paragraphs: [
      "After the agreed payment has been completed, the client may use the final approved deliverables for the commercial purpose agreed for the project, subject to any third-party asset licences and specific written terms.",
      "Third-party fonts, stock images, templates and other licensed assets remain subject to their own licence terms. Their purchase or transfer is not implied unless specified in the quotation.",
      "Editable source files, unused concepts and working files are excluded unless their delivery has been expressly agreed. Any rights or restrictions specific to a project should be confirmed in writing.",
    ],
  },
  {
    title: "8. Portfolio and Public Display",
    paragraphs: [
      "We may display completed work in our portfolio, website and promotional materials to demonstrate our services, unless the client requests and we agree to an opt-out or a separate confidentiality arrangement.",
      "Clients who require confidential handling should discuss this with us before work begins so the arrangement can be agreed in writing.",
    ],
  },
  {
    title: "9. Cancellations and Refunds",
    paragraphs: [
      "If a client cancels a project after work has started, the initial payment is not automatically refundable in full. Any refund will depend on the work completed, costs already incurred, project progress and the terms agreed for that project.",
      "Depending on progress and the circumstances, a refund of up to 60% of the initial payment may be considered. This is not a guaranteed refund. Any approved refund amount will be communicated to the client.",
      "Any specific cancellation or refund terms agreed in writing for a project will also apply, subject to applicable law.",
    ],
  },
  {
    title: "10. Third-Party Materials and Services",
    paragraphs: [
      "Some projects may use third-party software, printing providers, fonts, stock photographs or other external services. Availability, licensing conditions, production quality and delivery schedules may depend on those providers.",
      "Where third-party costs are required for a project, they will be addressed in the quotation or communicated before the costs are incurred.",
    ],
  },
  {
    title: "11. Website Use and Availability",
    paragraphs: [
      "You agree not to misuse this website, attempt unauthorized access, interfere with its operation or use it for unlawful purposes.",
      "We aim to keep the website useful and available, but we do not guarantee uninterrupted access or that every page or feature will always be error-free. We may update, maintain or change website content and features when necessary.",
    ],
  },
  {
    title: "12. Limitation and Applicable Law",
    paragraphs: [
      "Nothing in these terms is intended to exclude a right or liability that cannot lawfully be excluded. To the extent permitted by applicable law, we are not responsible for losses arising from information supplied incorrectly by a client, unauthorized use of deliverables or circumstances outside our reasonable control.",
      "These terms are intended to operate in accordance with applicable laws of the Federal Republic of Nigeria. Any dispute should first be discussed in good faith where practicable, without limiting any rights available under applicable law.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    paragraphs: [
      "We may revise these terms as our website, services or business practices change. The current version will be published on this page. Project-specific agreements already made with a client should be considered alongside any later general update.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: [
      "If you have questions about these Terms & Conditions or a project agreement, contact BM KONXEPT LTD using the details below.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-24 text-white">
      <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gold/[0.08] blur-[110px]"
        />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-gold"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold">
            <ShieldCheck size={27} aria-hidden="true" />
          </div>

          <p className="eyebrow mt-7">Legal information</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Terms <span className="gold-text">&amp; Conditions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            These terms explain the general conditions for using our website
            and working with BM KONXEPT LTD. Project-specific quotations and
            written agreements may provide additional details.
          </p>
          <p className="mt-4 text-xs leading-6 text-white/40">
            Please read these terms carefully before confirming a project.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6">
            <h2 className="text-lg font-bold text-gold">Quick overview</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-white/65 sm:grid-cols-2">
              <li>• Project scope and prices are agreed before work begins.</li>
              <li>• Two revision rounds are standard unless otherwise agreed.</li>
              <li>• Final digital files are PNG unless another format is agreed.</li>
              <li>• Urgent work and extra requests may cost more.</li>
              <li>• Editable source files are not automatically included.</li>
              <li>• Client approval is required before final delivery.</li>
            </ul>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-white/10 pb-8 last:border-b-0"
              >
                <h2 className="text-xl font-bold leading-8 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-white/60 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8">
            <h2 className="text-xl font-bold">Contact BM KONXEPT LTD</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Email:{" "}
              <a
                href="mailto:blessedmediakonxept@gmail.com"
                className="text-gold hover:underline"
              >
                blessedmediakonxept@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Phone:{" "}
              <a href="tel:+2347087866530" className="text-gold hover:underline">
                07087866530
              </a>
            </p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              WhatsApp:{" "}
              <a
                href="https://wa.me/2347087866530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Chat with our team
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-gold/50 hover:text-gold"
            >
              Read our Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

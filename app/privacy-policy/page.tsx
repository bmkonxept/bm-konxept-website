
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import Footer from "@/components/Footer";

const siteUrl = "https://bmkonxept.com";

export const metadata: Metadata = {
  title: "Privacy Policy | BM KONXEPT LTD",
  description:
    "Learn how BM KONXEPT LTD handles personal information, enquiries, quotation requests, website technologies and cookies.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "BM KONXEPT LTD respects the privacy of people who visit our website, contact us or enquire about our services. This Privacy Policy describes how we may collect, use, store and disclose personal information in connection with our website and business activities.",
      "This policy should be read alongside our Terms & Conditions. The information we actually collect depends on the features you use and the details you choose to provide.",
    ],
  },
  {
    title: "2. Information We May Collect",
    paragraphs: [
      "Contact and enquiry information: when you contact us by email, telephone, WhatsApp or through a website form, we may receive your name, contact details, project requirements, messages and information you choose to share.",
      "Project information: if you request a quotation or engage our services, we may handle project briefs, supplied images, text, brand assets, feedback, approvals, payment-related records and information needed to complete the agreed work.",
      "Technical information: our hosting provider or website technologies may process technical data such as IP address, browser type, device information, pages requested, referral information and server logs for security, reliability and operational purposes.",
      "We do not intend to collect information that is unnecessary for the relevant enquiry or service. Please avoid sending sensitive personal information unless it is genuinely required and we have agreed how it will be handled.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "We may use information to respond to enquiries, prepare quotations, communicate about projects, provide our services, manage approvals and payments, deliver work, maintain records, improve website performance, protect the website and comply with applicable legal obligations.",
      "We may also use information you provide to follow up on an active enquiry or project. We will not describe a message as marketing consent unless the relevant circumstances support that use.",
    ],
  },
  {
    title: "4. Legal Basis and Data Protection",
    paragraphs: [
      "Where applicable data protection law requires a lawful basis for processing, the appropriate basis will depend on the circumstances. This may include taking steps at your request before entering a contract, performing a contract, complying with legal obligations, protecting legitimate business interests or relying on consent where consent is required.",
      "We aim to handle personal information fairly and only for relevant purposes, with appropriate care and safeguards. Applicable rights and requirements depend on the law and the circumstances of the processing.",
    ],
  },
  {
    title: "5. Sharing Information",
    paragraphs: [
      "We do not intend to sell your personal information. We may share information when reasonably necessary with service providers who support our website or business, such as hosting, communications, analytics, storage or project-delivery providers, where those services are actually used.",
      "Information may also be disclosed where required by law, to respond to lawful requests, protect rights and security, or support a business transaction where legally appropriate. Service providers may process information under their own terms and privacy notices.",
    ],
  },
  {
    title: "6. Cookies and Similar Technologies",
    paragraphs: [
      "Cookies are small files that a website may store on your device. Similar technologies may be used to remember preferences, support website functions, help protect the site, or understand how visitors use it.",
      "The technologies active on this website depend on the services and features enabled at a given time. Essential technologies may be needed for security or basic operation. Analytics or advertising technologies, if introduced, may collect additional usage information or enable third-party services to recognize a browser.",
      "Where consent is required by applicable law or by a service provider's policies, we should obtain the required permission before enabling the relevant non-essential cookies or technologies. Browser settings may also let you block or delete cookies, although doing so can affect website functionality.",
      "We will update this section if the website's use of cookies or similar technologies changes. This section is not a claim that any particular analytics or advertising tracker is currently installed.",
    ],
  },
  {
    title: "7. Third-Party Websites and Services",
    paragraphs: [
      "Our website may link to third-party services such as WhatsApp, Instagram, TikTok, Pinterest or other external websites. If you follow an external link or communicate with us through another service, that provider may collect and process information under its own privacy policy and terms.",
      "We do not control the privacy practices of external services. We encourage you to review their policies before providing personal information to them.",
    ],
  },
  {
    title: "8. Data Security",
    paragraphs: [
      "We take reasonable steps appropriate to our operations to protect information against unauthorized access, loss, misuse or disclosure. No website, online transmission or electronic storage system can be guaranteed to be completely secure.",
      "Please use appropriate care when sending personal information over the internet and contact us if you believe information you provided to us has been exposed or misused.",
    ],
  },
  {
    title: "9. Retention of Information",
    paragraphs: [
      "We keep information for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, delivering projects, maintaining business records, resolving disputes and meeting legal obligations.",
      "Retention periods may differ depending on the type of information, the nature of the project and any applicable legal requirements. Information may be securely deleted or anonymized when it is no longer needed, where appropriate.",
    ],
  },
  {
    title: "10. Your Choices and Rights",
    paragraphs: [
      "Depending on applicable law and the circumstances, you may have rights to request access to personal information, correction of inaccurate information, deletion, restriction or objection to certain processing, or withdrawal of consent where processing relies on consent.",
      "To make a privacy request, contact us using the details below. We may need to verify your identity and clarify the request before responding. Some information may need to be retained where the law permits or requires it.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "Our website and services are intended for general business and creative use and are not specifically directed at children. Please contact us if you believe a child has provided personal information to us inappropriately, so we can assess the situation and take appropriate action.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our practices, website features or applicable requirements change. The latest version will be published on this page. We encourage visitors to review it periodically.",
    ],
  },
  {
    title: "13. Contact Us About Privacy",
    paragraphs: [
      "For privacy questions or requests concerning personal information handled by BM KONXEPT LTD, contact us using the details below.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 text-white">
      <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-gold/[0.08] blur-[110px]"
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
            <LockKeyhole size={27} aria-hidden="true" />
          </div>

          <p className="eyebrow mt-7">Your information matters</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            This policy explains how BM KONXEPT LTD may handle personal
            information when you visit our website, contact us, request a
            quotation or work with us.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6">
            <h2 className="text-lg font-bold text-gold">Privacy at a glance</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-white/65">
              <li>• We may use information to respond to enquiries and deliver agreed services.</li>
              <li>• Website hosting and enabled tools may process technical information.</li>
              <li>• We do not intend to sell your personal information.</li>
              <li>• Cookies and similar technologies depend on the website features enabled.</li>
              <li>• You can contact us with questions or requests about your information.</li>
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
              href="/terms-and-conditions"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-gold/50 hover:text-gold"
            >
              Read our Terms &amp; Conditions
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


export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  services: string[];
  coverImage: string;
  images: string[];
  imageAlt: string;
};

const asset = (folder: string, filename: string) =>
  `/assets/case-studies/${folder}/${filename}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "anna-scent",
    title: "Anna Scent",
    category: "Advertising & Promotional Design",
    summary:
      "Promotional design created for Anna Scent, presenting the brand and its offering through a focused visual.",
    overview:
      "This project showcases promotional design for Anna Scent. The featured creative gives the brand a visual asset for communicating its offering. Contact us to discuss a similar promotional design for your business.",
    services: ["Promotional graphic design", "Visual communication"],
    coverImage: asset("case-study-anna-scent", "20260219-191631.webp"),
    images: [asset("case-study-anna-scent", "20260219-191631.webp")],
    imageAlt: "Anna Scent promotional design by BM KONXEPT LTD",
  },
  {
    slug: "djados-threadlines",
    title: "Djados Threadlines",
    category: "Brand Promotion",
    summary:
      "A promotional design project for Djados Threadlines, using a dedicated visual to present the business.",
    overview:
      "This case study features design work created for Djados Threadlines. The project is presented as a visual example of how a business can communicate its identity and offering through promotional graphics.",
    services: ["Promotional graphic design", "Business visual communication"],
    coverImage: asset(
      "case-study-djados-threadlines",
      "20260220-145947.webp"
    ),
    images: [
      asset("case-study-djados-threadlines", "20260220-145947.webp"),
    ],
    imageAlt: "Djados Threadlines promotional design by BM KONXEPT LTD",
  },
  {
    slug: "fogsu-futmx-bus-transit",
    title: "FOGSU FUTMX Bus Transit",
    category: "Advertising & Promotional Design",
    summary:
      "A collection of transit-related promotional visuals created for FOGSU FUTMX Bus Transit.",
    overview:
      "This project brings together the supplied FOGSU FUTMX Bus Transit designs. The visuals provide examples of promotional communication for a transport-related service. The gallery shows the available creative assets without making unsupported claims about business results.",
    services: ["Promotional design", "Visual communication"],
    coverImage: asset(
      "case-study-fogsu-futmx-bus-transit",
      "20260419-155011.webp"
    ),
    images: [
      asset("case-study-fogsu-futmx-bus-transit", "20260419-155011.webp"),
      asset("case-study-fogsu-futmx-bus-transit", "20260529-154454.webp"),
      asset("case-study-fogsu-futmx-bus-transit", "20260809-190925.webp"),
    ],
    imageAlt: "FOGSU FUTMX Bus Transit promotional design by BM KONXEPT LTD",
  },
  {
    slug: "fogsu-hiking-2026",
    title: "FOGSU Hiking 2026",
    category: "Event Design",
    summary:
      "Event flyer designs prepared for FOGSU Hiking 2026.",
    overview:
      "This case study features the available flyer designs for FOGSU Hiking 2026. The creative work focuses on presenting event information in a visual format suitable for sharing with an intended audience.",
    services: ["Event flyer design", "Promotional graphics"],
    coverImage: asset(
      "case-study-fogsu-hiking-2026-flyer-design",
      "20260528-210821.webp"
    ),
    images: [
      asset(
        "case-study-fogsu-hiking-2026-flyer-design",
        "20260528-210821.webp"
      ),
      asset(
        "case-study-fogsu-hiking-2026-flyer-design",
        "20260603-200303.webp"
      ),
      asset(
        "case-study-fogsu-hiking-2026-flyer-design",
        "20260605-094415.webp"
      ),
      asset(
        "case-study-fogsu-hiking-2026-flyer-design",
        "20260606-064842.webp"
      ),
    ],
    imageAlt: "FOGSU Hiking 2026 event flyer design by BM KONXEPT LTD",
  },
  {
    slug: "juda-beads",
    title: "Juda Beads",
    category: "Brand Promotion",
    summary:
      "A set of promotional design assets created for Juda Beads.",
    overview:
      "This project showcases the supplied Juda Beads creative assets. The designs demonstrate ways promotional graphics can present a business and its products consistently across visual communications.",
    services: ["Promotional graphic design", "Brand communication"],
    coverImage: asset("case-study-juda-beads", "20251013-231912.webp"),
    images: [
      asset("case-study-juda-beads", "20251013-231912.webp"),
      asset("case-study-juda-beads", "20251022-182921.webp"),
      asset("case-study-juda-beads", "20260226-221914.webp"),
    ],
    imageAlt: "Juda Beads promotional design by BM KONXEPT LTD",
  },
  {
    slug: "naeees-executive-id-card-design-and-printing",
    title: "NAEEES Executive ID Card Design and Printing",
    category: "Print Design",
    summary:
      "Executive ID card design and printing work for NAEEES.",
    overview:
      "This project features the supplied NAEEES executive ID card designs. It highlights identity-card layout and print-focused design work. Contact BM KONXEPT LTD to discuss ID card design and printing for your organisation.",
    services: ["ID card design", "Print design"],
    coverImage: asset(
      "case-study-naeees-executive-id-card-design-and-printing",
      "20260617-022014.webp"
    ),
    images: [
      asset(
        "case-study-naeees-executive-id-card-design-and-printing",
        "20260617-022014.webp"
      ),
      asset(
        "case-study-naeees-executive-id-card-design-and-printing",
        "20261013-073201.webp"
      ),
    ],
    imageAlt: "NAEEES executive ID card design by BM KONXEPT LTD",
  },
  {
    slug: "peculiar-family",
    title: "Peculiar Family",
    category: "Branding",
    summary:
      "A branding design example created for Peculiar Family.",
    overview:
      "This case study presents the supplied Peculiar Family branding asset. It is included as an example of BM KONXEPT LTD's visual identity and branding work.",
    services: ["Branding", "Logo design"],
    coverImage: asset("case-study-peculiar-family", "20250826-234324.webp"),
    images: [
      asset("case-study-peculiar-family", "20250826-234324.webp"),
    ],
    imageAlt: "Peculiar Family branding design by BM KONXEPT LTD",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

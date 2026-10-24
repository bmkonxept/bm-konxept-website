
export const company = {
  name: "BM KONXEPT LTD",
  alternateName: "BM KONXEPT",
  tagline: "Innovate • Connect • Elevate",

  description:
    "BM KONXEPT LTD is a Nigerian creative branding, graphic design, advertising, printing and business communication company helping businesses, organizations and individuals communicate and present themselves professionally.",

  phone: "07087866530",
  email: "blessedmediakonxept@gmail.com",

  instagram: "https://instagram.com/bmkonxept",
  tiktok: "https://www.tiktok.com/@bmkonxept",

  whatsapp:
    "https://wa.me/2347087866530?text=Hello%20BM%20KONXEPT%2C%20I%27d%20like%20to%20start%20a%20project.",

  website: "https://bmkonxept.com",
  country: "Nigeria",
};

export const services = [
  {
    title: "Logo Design",
    description:
      "Professional logo design that gives businesses and organizations a memorable, distinctive and recognizable visual identity.",
  },
  {
    title: "Flyer & Poster Design",
    description:
      "Eye-catching flyer and poster designs for businesses, events, campaigns, promotions and announcements.",
  },
  {
    title: "Social Media Graphics",
    description:
      "Creative social media graphics designed to communicate messages clearly and strengthen a brand's visual presence online.",
  },
  {
    title: "Business Cards & Stationery",
    description:
      "Professional business cards, letterheads and stationery designed to keep business communication consistent and visually professional.",
  },
  {
    title: "Brochures & Company Profiles",
    description:
      "Well-structured brochures and company profiles that present businesses, services, products and organizational stories professionally.",
  },
  {
    title: "Packaging & Product Labels",
    description:
      "Creative packaging and product label designs that help products stand out while communicating important visual information clearly.",
  },
  {
    title: "Catalogue Design",
    description:
      "Organized and attractive catalogue designs for showcasing products, services, collections and business offerings.",
  },
  {
    title: "Roll-up Banners",
    description:
      "Professional roll-up banner designs for exhibitions, events, offices, promotions, presentations and other display needs.",
  },
  {
    title: "Corporate Branding",
    description:
      "Consistent corporate branding solutions that help businesses establish recognition, credibility and a professional visual presence.",
  },
  {
    title: "Printing Services",
    description:
      "Printing support for business materials, promotional designs, corporate documents and other professionally designed communication materials.",
  },
  {
    title: "Marketing & Advertising Materials",
    description:
      "Creative marketing and advertising materials designed to help businesses communicate, promote their offerings and connect with their audiences.",
  },
];

export type PortfolioCategory =
  | "Branding"
  | "Advertising"
  | "Social Media"
  | "Event Design"
  | "Print Design"
  | "Stationery";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
};

const projectAsset = (folder: string, filename: string) =>
  `/assets/projects/${folder}/${filename}`;

export const portfolio: PortfolioProject[] = [
  // BRANDING — logos only
  {
    slug: "peculiar-family",
    title: "Peculiar Family",
    category: "Branding",
    image: projectAsset("project-section-logo", "20250826-234324.webp"),
    description:
      "Logo identity design created to give Peculiar Family a distinctive and memorable visual presence.",
  },
  {
    slug: "juda-beads",
    title: "Juda Beads",
    category: "Branding",
    image: projectAsset("project-section-logo", "20251022-182921.webp"),
    description:
      "Logo design for Juda Beads, creating a recognizable visual identity for the brand.",
  },
  {
    slug: "classic-touch-laundry-service",
    title: "Classic Touch Laundry Service",
    category: "Branding",
    image: projectAsset("project-section-logo", "20251103-210038.webp"),
    description:
      "Professional logo identity created for Classic Touch Laundry Service.",
  },
  {
    slug: "gci",
    title: "CTECH",
    category: "Branding",
    image: projectAsset("project-section-logo", "20260415-095013.webp"),
    description:
      "Distinctive logo identity developed for CTECH.",
  },
  {
    slug: "awa-omo-oluwa",
    title: "Awa Omo Oluwa",
    category: "Branding",
    image: projectAsset("project-section-logo", "20260514-004906.webp"),
    description:
      "Brand identity design created for Awa Omo Oluwa.",
  },
  {
    slug: "gold-k-logo",
    title: "Gold K Logo Concept",
    category: "Branding",
    image: projectAsset("project-section-logo", "20260924-173506.webp"),
    description:
      "Gold-toned K logo concept showcasing a distinctive visual identity direction.",
  },

  // ADVERTISING — business and product promotions
  {
    slug: "juda-beads-promotional-design",
    title: "Juda Beads Promotional Design",
    category: "Advertising",
    image: projectAsset("project-section-business-flyer", "20251013-231912.webp"),
    description:
      "Promotional advertising creative designed to showcase Juda Beads and communicate its offering visually.",
  },
  {
    slug: "anna-scent-promotional-design",
    title: "Anna Scent Promotional Design",
    category: "Advertising",
    image: projectAsset("project-section-business-flyer", "20260219-191631.webp"),
    description:
      "Product-focused promotional advertising design created for Anna Scent.",
  },
  {
    slug: "djados-threadlines",
    title: "Djados Threadlines",
    category: "Advertising",
    image: projectAsset("project-section-business-flyer", "20260220-145947.webp"),
    description:
      "Business promotional creative designed for Djados Threadlines.",
  },
  {
    slug: "bm-konxept-promotion",
    title: "BM KONXEPT Creative Branding & Design Agency",
    category: "Advertising",
    image: projectAsset("project-section-business-flyer", "20260129-211811.webp"),
    description:
      "Promotional design presenting BM KONXEPT's creative branding and design services.",
  },
  {
    slug: "bm-konxept-brand-promotion",
    title: "BM KONXEPT Brand Promotion",
    category: "Advertising",
    image: projectAsset("project-section-others", "20261008-015617.webp"),
    description:
      "Promotional creative highlighting BM KONXEPT's brand and design offering.",
  },

  // EVENT DESIGN — events, church programmes and gatherings
  {
    slug: "fogsu-friendly-match",
    title: "FOGSU Friendly Match",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260416-071312.webp"),
    description:
      "Sports event promotional design created for the FOGSU Friendly Match.",
  },
  {
    slug: "fogsu-hiking-2026",
    title: "FOGSU Hiking 2026",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260528-210821.webp"),
    description:
      "Event creative designed for the FOGSU Hiking 2026 programme.",
  },
  {
    slug: "fogsu-hiking-transport",
    title: "FOGSU Hiking 2026 Transport",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260529-154454.webp"),
    description:
      "Supporting event design created for FOGSU Hiking 2026 transport arrangements.",
  },
  {
    slug: "fogsu-hiking-event",
    title: "FOGSU Hiking Event",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260606-064842.webp"),
    description:
      "Promotional event design created for the FOGSU Hiking event.",
  },
  {
    slug: "fogsu-congress-meeting",
    title: "FOGSU Congress Meeting",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260611-085140.webp"),
    description:
      "Event design created for the FOGSU Congress Meeting.",
  },
  {
    slug: "fyb-clash-2025",
    title: "FYB Clash 2025",
    category: "Event Design",
    image: projectAsset("project-section-event", "20260620-013946.webp"),
    description:
      "Sports event promotional design created for FYB Clash 2025.",
  },
  {
    slug: "swep-theme-interpretation",
    title: "SWEP 2026 — Theme Interpretation Service",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260829-133725.webp"),
    description:
      "Church programme design for the SWEP 2026 theme interpretation service.",
  },
  {
    slug: "the-hand-of-god",
    title: "Household of Love — The Hand of God",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260904-005827-01.webp"),
    description:
      "Church programme artwork created for Household of Love — The Hand of God.",
  },
  {
    slug: "swep-drama-sunday",
    title: "SWEP 2026 — Drama Sunday Excerpt",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260915-200838-01.webp"),
    description:
      "Programme design created for the SWEP 2026 Drama Sunday excerpt.",
  },
  {
    slug: "swep-anointing-for-exploits",
    title: "SWEP 2026 — Anointing for Exploits",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260918-140332-01.webp"),
    description:
      "Church event design for the SWEP 2026 Anointing for Exploits programme.",
  },
  {
    slug: "swep-evangelism-weekend",
    title: "SWEP 2026 — Evangelism Weekend",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260918-202339-01.webp"),
    description:
      "Event artwork created for the SWEP 2026 Evangelism Weekend.",
  },
  {
    slug: "swep-thanksgiving-service",
    title: "SWEP 2026 — Thanksgiving Service",
    category: "Event Design",
    image: projectAsset("project-section-church-flyer-design", "20260926-083423-01.webp"),
    description:
      "Programme artwork created for the SWEP 2026 Thanksgiving Service.",
  },

  // SOCIAL MEDIA — social graphics and birthday creatives
  {
    slug: "birthday-creative",
    title: "Birthday Creative",
    category: "Social Media",
    image: projectAsset("project-section-birthday-flyer-design", "20260311-114828.webp"),
    description:
      "Personal celebration creative designed for sharing on social media.",
  },
  {
    slug: "hello-monday",
    title: "Hello Monday",
    category: "Social Media",
    image: projectAsset("project-section-social-media-design", "20260330-113630.webp"),
    description:
      "Positive Monday social media creative designed for audience engagement.",
  },
  {
    slug: "april-social-media-creative",
    title: "April Social Media Creative",
    category: "Social Media",
    image: projectAsset("project-section-social-media-design", "20260401-013736.webp"),
    description:
      "Social media visual created for April communication and audience engagement.",
  },
  {
    slug: "friday-social-media-creative",
    title: "Friday Social Media Creative",
    category: "Social Media",
    image: projectAsset("project-section-social-media-design", "20260423-160913.webp"),
    description:
      "Social media creative designed for Friday audience engagement and communication.",
  },
  {
    slug: "birthday-creative-hossanah",
    title: "Birthday Creative — Hossanah",
    category: "Social Media",
    image: projectAsset("project-section-birthday-flyer-design", "20260627-212403.webp"),
    description:
      "Personalized birthday social media creative created for Hossanah.",
  },
  {
    slug: "birthday-creative-miss-okikjesu",
    title: "Birthday Creative — Miss Okikjesu",
    category: "Social Media",
    image: projectAsset("project-section-birthday-flyer-design", "20260908-073745.webp"),
    description:
      "Personalized birthday social media creative for Miss Okikjesu.",
  },

  // PRINT DESIGN — branded products and print materials
  {
    slug: "corporate-print-creative",
    title: "Corporate Print Creative",
    category: "Print Design",
    image: projectAsset("project-section-others", "20260206-111223.webp"),
    description:
      "Professional creative prepared for corporate and promotional print communication.",
  },
  {
    slug: "corporate-communication-design",
    title: "Corporate Communication Design",
    category: "Print Design",
    image: projectAsset("project-section-others", "20260327-230332.webp"),
    description:
      "Visual communication design created for professional presentation and corporate use.",
  },
  {
    slug: "promotional-print-material",
    title: "Promotional Print Material",
    category: "Print Design",
    image: projectAsset("project-section-others", "20260613-104501.webp"),
    description:
      "Promotional print material designed for effective visual communication.",
  },
  {
    slug: "awa-omo-oluwa-branded-bag",
    title: "Awa Omo Oluwa Branded Bag",
    category: "Print Design",
    image: projectAsset("project-section-others", "20260514-070156.webp"),
    description:
      "Branded bag presentation created to extend Awa Omo Oluwa's visual identity to product packaging.",
  },
  {
    slug: "awa-omo-oluwa-branded-cup",
    title: "Awa Omo Oluwa Branded Cup",
    category: "Print Design",
    image: projectAsset("project-section-others", "20260514-070542.webp"),
    description:
      "Branded cup mockup applying Awa Omo Oluwa's identity to a promotional product.",
  },

  // STATIONERY — business cards and identification materials
  {
    slug: "business-card-id-card-design",
    title: "Business Card & ID Card Design",
    category: "Stationery",
    image: projectAsset("project-section-business-card-id-card", "20260415-094928.webp"),
    description:
      "Business card and identification design work for professional business communication.",
  },
  {
    slug: "corporate-id-card-design",
    title: "Corporate ID Card Design",
    category: "Stationery",
    image: projectAsset("project-section-business-card-id-card", "20260617-022014.webp"),
    description:
      "Identification card design created for organizational use.",
  },
  {
    slug: "business-card-design",
    title: "Business Card Design",
    category: "Stationery",
    image: projectAsset("project-section-business-card-id-card", "20260812-140429.webp"),
    description:
      "Business card design created for professional brand presentation.",
  },
];

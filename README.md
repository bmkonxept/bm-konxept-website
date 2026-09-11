# BM KONXEPT LTD — Progressive Web App

Premium black/gold creative-agency starter built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy

Push this project to GitHub and import it into Vercel.

## Replace before launch

- Add the final BM KONXEPT logo files in `public/`
- Add optimized WebP/AVIF portfolio images
- Add real testimonials
- Add the Lead Creative profile/photo
- Add physical business address if desired
- Set the production domain in `app/layout.tsx`
- Connect the contact form to an email/form backend
- Add a Google Maps embed when the official location is confirmed

## PWA

The project includes `public/manifest.webmanifest` and a service worker. The service worker is intentionally lightweight and should be expanded with versioned asset caching and an offline page before a high-traffic production launch.

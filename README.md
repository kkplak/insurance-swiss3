# Protegos Insurance Switzerland

A multilingual insurance advisory website built with React, TypeScript, and Vite. The site supports English, German, and Polish, with responsive product guides, contact capture, and consent-aware analytics.

## Highlights

- Responsive design system shared by every route
- Persistent mobile navigation and language selection
- Dedicated guides for health, home, car, liability, legal, and newcomer insurance topics
- Formspree-powered contact form
- Optional Google Analytics, loaded only after explicit consent
- Self-hosted variable fonts and instant client-side route changes

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Development

```bash
npm ci
npm run dev
```

The development server is available at [http://localhost:3000](http://localhost:3000).
For compatibility with the previous Create React App setup, `npm start` runs the same command.

## Project structure

- `src/components` — reusable navigation, cards, contact form, data, consent, and CTA components
- `src/pages` — route-level page content
- `src/styles/insurance-pages.css` — shared layout for all insurance detail pages
- `src/locales` — English, German, and Polish translation files
- `public/media` — site imagery and partner logos

## Available scripts

- `npm run dev` — start the Vite development server.
- `npm start` — alias for `npm run dev`.
- `npm run typecheck` — run TypeScript type checking.
- `npm run build` — type-check and create a production build in `dist/`.
- `npm run preview` — preview the production build locally.

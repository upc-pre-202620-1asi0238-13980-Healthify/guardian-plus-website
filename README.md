# Guardian+ Website

Landing page of Guardian+, the remote care and monitoring solution by Healthify. It presents the value proposition, the product capabilities, the subscription plans and a contact form for families and caregivers.

## Tech stack

- React 19 with Create React App (`react-scripts` 5.0.1)
- Plain CSS with design tokens from the Guardian+ Style Guidelines
- [Lucide](https://lucide.dev) icons
- Jest and React Testing Library

## Getting started

```bash
npm ci
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm start` | Runs the development server. |
| `npm test` | Runs the test suite in watch mode. |
| `npm run build` | Builds the production bundle in `build/`. |

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values when they are available.

| Variable | Description |
| --- | --- |
| `REACT_APP_CONTACT_ENDPOINT` | Endpoint that receives the contact form requests. When empty, the submission is simulated. |
| `REACT_APP_APP_DOWNLOAD_URL` | Mobile app download or sign-up URL used by the plan buttons. When empty, the buttons lead to the contact section. |

## Project structure

```text
src/
├── assets/          # Images and app screens exported from Figma
├── components/
│   ├── common/      # Reusable UI: Button, Logo, SectionHeading
│   ├── layout/      # Header and Footer
│   └── sections/    # One folder per landing page section
├── config/          # Navigation and external links
├── data/            # Landing page content
├── hooks/           # Scroll related hooks
├── services/        # Contact request submission
├── styles/          # Design tokens and base styles
└── utils/           # Form validation
```

## Sections

| Section | Anchor | User Story |
| --- | --- | --- |
| Header and navigation | — | US30 |
| Cómo funciona | `#how-it-works` | US30 |
| La pulsera Guardian+ | — | US31 |
| Beneficios | `#benefits` | US31 |
| La app por dentro | — | US31 |
| Zonas seguras | — | US31 |
| Por qué Guardian+ | `#why-guardian` | US31 |
| Precios | `#pricing` | US33 |
| Contacto | `#contact` | US32 |

## Deployment

The site is deployed on Cloudflare Pages from the `main` branch using the `Create React App` preset, `npm run build` as build command, `build` as output directory and `NODE_VERSION=20` as environment variable. Pull requests get a preview deployment on a `*.pages.dev` URL.

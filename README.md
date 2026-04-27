# Dar ul Zahra - Frontend

A modern Next.js 14 frontend application for Dar ul Zahra Educational Institution.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **SEO**: Next.js Metadata API + next-sitemap

## Project Structure

```
dar-ul-zahra-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (home)/            # Homepage route group
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── gallery/           # Gallery page
│   │   ├── blog/              # Blog page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout with SEO
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   └── ui/                # shadcn/ui components
│   ├── lib/                   # Utility libraries
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   ├── styles/                # Additional styles
│   ├── assets/                # Static assets (images, etc.)
│   ├── utils/                 # Utility functions
│   └── constants/             # Configuration constants
├── public/                    # Public static files
├── .env.local                 # Environment variables (gitignored)
├── .env.example               # Environment variables template
├── next-sitemap.config.js     # Sitemap configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with your configuration

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This will also generate sitemap and robots.txt automatically.

### Production

```bash
npm start
```

## Adding shadcn/ui Components

To add new UI components:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## SEO Configuration

SEO is configured using Next.js 14's built-in Metadata API in `src/app/layout.tsx`.

To add page-specific SEO, export a `metadata` object in each page:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your site URL
- `NEXT_PUBLIC_SITE_NAME`: Site name
- `NEXT_PUBLIC_DESCRIPTION`: Site description

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run postbuild` - Generate sitemap (runs automatically after build)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

- [ ] Add Header and Footer components
- [ ] Implement navigation
- [ ] Create page layouts
- [ ] Add content to pages
- [ ] Configure analytics
- [ ] Add authentication (if needed)
- [ ] Set up CMS integration (if needed)

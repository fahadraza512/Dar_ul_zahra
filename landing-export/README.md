# Landing Page — Standalone Export

All files needed to drop this landing page into a new Next.js project.

## Files

| File           | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `page.tsx`     | Root page — copy to `app/page.tsx`                                |
| `Navbar.tsx`   | Transparent navbar with hover mega-menu dropdowns                 |
| `Hero.tsx`     | Full-screen hero: particle canvas + magnetic text + feature pills |
| `Features.tsx` | Bento-grid features section with video previews                   |
| `Stats.tsx`    | Stats row + trusted-by logos                                      |
| `Pricing.tsx`  | 3-column pricing cards                                            |
| `Footer.tsx`   | Full footer with banner CTA                                       |
| `globals.css`  | Design tokens, animations, Material Symbols font-face             |

## Quick Setup

### 1. Install dependencies

```bash
npm install next react react-dom tailwindcss @tailwindcss/postcss
```

### 2. Fonts

Add to your `layout.tsx`:

```tsx
import { Space_Grotesk, Manrope } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

Apply both variables to `<html>`:

```tsx
<html className={`${spaceGrotesk.variable} ${manrope.variable}`}>
```

### 3. Material Symbols icon font

Either self-host (recommended — no flash):

- Download `material-symbols-outlined.woff2` from Google Fonts
- Place at `public/fonts/material-symbols-outlined.woff2`

Or use the CDN (add to `<head>`):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>
```

Then remove the `@font-face` block from `globals.css`.

### 4. Add font-loaded class (prevents icon flash)

Add this script to your `layout.tsx` body:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `(function(){if(document.fonts){document.fonts.ready.then(function(){document.documentElement.classList.add('fonts-loaded')});}else{document.documentElement.classList.add('fonts-loaded');}})();`,
  }}
/>
```

### 5. next.config.ts — allow remote images

```ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "speedforce.agency" }],
  },
};
```

Or replace the logo `src` with your own image.

### 6. Tailwind v4 config

`globals.css` uses `@import "tailwindcss"` (Tailwind v4 syntax).  
`postcss.config.mjs`:

```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

## Customisation

- Brand colour: change `--primary` in `globals.css` (currently `#b7122a`)
- Logo: swap the `Image src` in `Navbar.tsx` and `Footer.tsx`
- Nav links / mega-menu items: edit `megaMenus` and `navLinks` in `Navbar.tsx`
- Pricing plans: edit the `plans` array in `Pricing.tsx`
- Hero copy: edit `Hero.tsx` directly

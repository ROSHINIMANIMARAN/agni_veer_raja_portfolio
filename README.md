# Architecture Student Portfolio · 2026

A premium, editorial architecture portfolio website built from scratch with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Router v6**.

## 🏛️ Design Identity & Aesthetic
- **Atmosphere**: Minimalist, tactile, warm editorial architectural monograph.
- **Palette**:
  - `Off-white` (`#FAF8F5`) — Grounding paper texture
  - `Sand Beige` (`#E8DFD0` & `#F0EAE0`) — Warm natural stone & plaster
  - `Charcoal` (`#1A1A1A`) — Editorial ink & technical contrast
  - `Muted Stone` (`#6B6B6B`) — Architectural annotations & metadata
  - `Olive` (`#7A7A5C`) — Subtle botanical & materiality accents
- **Typography**:
  - *Serif*: Playfair Display for grand architectural titles and spatial reflection
  - *Sans & Mono*: Inter for clean technical descriptions and specifications

---

## 📐 Project Structure

```
d:\agni\
├── index.html                  # HTML template with Google Fonts (Playfair Display, Inter)
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS Tailwind + Autoprefixer
├── tailwind.config.js          # Custom theme colors, typography, animations
├── tsconfig.json               # Strict TypeScript configuration
├── tsconfig.node.json          # Node config for Vite
├── vite.config.ts              # Vite React configuration
└── src/
    ├── main.tsx                # React root mount
    ├── App.tsx                 # Root router and global layout
    ├── index.css               # Tailored global styles & custom scrollbars
    ├── vite-env.d.ts           # Vite client types
    ├── data/
    │   └── projects.ts         # 6 architectural case studies with real Unsplash images
    ├── components/
    │   ├── Navbar.tsx          # Dynamic scroll-transition header with active section tracking
    │   ├── Footer.tsx          # Editorial footer with site map and studio contact
    │   ├── CustomCursor.tsx    # Interactive spring cursor (hidden on touch/mobile)
    │   └── ScrollToTop.tsx     # Route and hash-based smooth scroll controller
    ├── pages/
    │   ├── Home.tsx            # Main single-page scroll layout
    │   └── ProjectDetail.tsx   # Comprehensive architectural case study page with lightbox
    └── sections/
        ├── Hero.tsx            # Full-viewport hero with staggered entrance animations
        ├── Projects.tsx        # Editorial asymmetric grid with hover reveals
        ├── About.tsx           # Portrait, biography, design pillars, PDF placeholders
        ├── Skills.tsx          # 3-column editorial tool competence lists
        ├── Process.tsx         # 6-stage chronological methodology timeline
        └── Contact.tsx         # Interactive contact form with demo mode notices
```

---

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the local development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

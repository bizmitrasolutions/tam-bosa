# TAM-BoSa Beach Retreat Website - Project Plan

## 1. Overview
Develop a 5-page, high-conversion luxury website for TAM-BoSa Beach Retreat. The site will feature a deep, moody atmosphere, cinematic motion, sharp geometry, and a muted, nature-inspired palette.

## 2. Project Type
**WEB**

## 3. Success Criteria
- Fully responsive across mobile, tablet, and desktop
- Visually stunning with cinematic animations (scroll and reveal)
- "Contact Us" form successfully redirects to WhatsApp with a pre-filled message (no complex backend needed)
- Adherence to the provided color palette (Teal gradient, Gold, Green, Water Accent)
- High lighthouse scores for performance and accessibility (no purple/violet)
 
## 4. Tech Stack
- **Framework:** Next.js (App Router) - For rapid development, optimal performance, and static file generation capabilities.
- **Styling:** Tailwind CSS - For utility-first, rapid UI development.
- **Animations:** Framer Motion - For complex scroll animations, reveals, and fluid transitions.
- **Component Libraries:** Custom implementations inspired by Aceternity UI / Shadcn UI for a premium luxury feel without feeling templated.
- **Icons:** Lucide React
 
## 5. File Structure
```
/
├── app/
│   ├── layout.tsx         # Global Nav, Footer, Font, Meta
│   ├── page.tsx           # Home - The Landing Experience
│   ├── accommodations/    # Accommodations detail
│   ├── experiences/       # The Daily Rhythm
│   ├── gallery/           # Visual Storytelling
│   └── contact/           # Reservation & Contact
├── components/
│   ├── ui/                # Base reusable components
│   ├── layout/            # Navbar, Footer
│   └── sections/          # Hero, Duality, Masonry, etc.
├── lib/
│   └── utils.ts
└── public/
    └── assets/            # Images, logo
```

## 6. Task Breakdown

### Task 1: Project Scaffolding
- **Agent:** `frontend-specialist`
- **Skill:** `app-builder`
- **Dependency:** None
- **Priority:** P0
- **INPUT:** PLAN-tambosa-resort.md
- **OUTPUT:** Initialized Next.js project with Tailwind, Framer Motion, and color variables in `globals.css`
- **VERIFY:** Dev server starts successfully without errors, colors are applied.

### Task 2: Design System & Global Layout
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Dependency:** Task 1
- **Priority:** P1
- **INPUT:** Color palette, Figma/Outline concepts
- **OUTPUT:** `layout.tsx` updated with custom fonts, Floating Navbar, Footer, and predefined style classes.
- **VERIFY:** Navbar transitions on scroll, Footer appears correctly on mobile and desktop. No standard templates.

### Task 3: The Landing Experience (Home Page)
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Dependency:** Task 2
- **Priority:** P1
- **INPUT:** `assets/website_outline.md` (Section 2)
- **OUTPUT:** `app/page.tsx` with Hero Introduction, The Duality (Ocean vs Backwater scroll effect), and Retreat Essence.
- **VERIFY:** Framer Motion animations trigger seamlessly on scroll. Responsive design holds on mobile.

### Task 4: Accommodations & Daily Rhythm
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Dependency:** Task 2, Task 3
- **Priority:** P1
- **INPUT:** `assets/website_outline.md` (Sections 3 & 4)
- **OUTPUT:** `accommodations/page.tsx` and `experiences/page.tsx` with high-quality visual grids and collapsible Q&A elements.
- **VERIFY:** Sections display correctly, masonry/grids do not break on narrow screens.

### Task 5: Gallery & Visual Storytelling
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Dependency:** Task 2
- **Priority:** P2
- **INPUT:** `assets/website_outline.md` (Section 5)
- **OUTPUT:** `gallery/page.tsx` featuring a fragmented masonry layout with immersive image expansion.
- **VERIFY:** Organic layout matches masonry description and expands smoothly.

### Task 6: Reservation & Contact (WhatsApp Integration)
- **Agent:** `frontend-specialist`
- **Skill:** `clean-code`
- **Dependency:** Task 2
- **Priority:** P1
- **INPUT:** User requirement (Static form -> WhatsApp)
- **OUTPUT:** `contact/page.tsx` with a high-contrast form. On submit, builds a `wa.me` URL with pre-filled content and opens in a new tab.
- **VERIFY:** Clicking submit opens WhatsApp with correctly formatted text including form details.

## 7. Phase X: Verification
- [ ] Lint & Type Check passes
- [ ] No purple/violet hex codes used
- [ ] UX Audit / Responsive checks passed
- [ ] Colors applied strictly as per client constraint
- [ ] Navigation and layout components do not use standard/cliché templates

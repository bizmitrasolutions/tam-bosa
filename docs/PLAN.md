# Performance & UX Improvement Plan

## 1. Objective
Improve the performance, loading speed, and overall UX of the TAM-BoSa Beach Retreat website. This includes heavily optimizing images (moving from `.png` / `.jpeg` to `.webp` and leveraging Next.js `<Image>`), refining the user experience (touch targets, visual hierarchy, feedback loops), and eliminating any layout thrashing or long tasks.

## 2. Domains & Agent Selection
As per the `orchestrator` matrix, this task touches the following domains:

- **Frontend / UI:** `frontend-specialist` (Managing UX updates, visual feedback, layout refinements)
- **Performance:** `performance-optimizer` (Image size reduction, format conversion, script optimization, LCP/CLS improvements)
- **Verification:** `test-engineer` (Running Lighthouse audits, Playwright/E2E tests, verifying Core Web Vitals)

## 3. Phase 1: Planning
This document serves as the foundation. We will await user approval before moving to Phase 2.

## 4. Phase 2: Implementation (Parallel Execution)

### Step 1: `frontend-specialist` (UX, Image Spinners, Interaction)
- **Image Skeleton Loaders:** Create a centralized `<OptimizedImage>` or enhanced `NextImage` hook/component that renders a beautiful, premium skeleton loader (or spinner) while `.webp` images are downloading. This prevents the user from staring at a blank screen or broken layout.
- **Visual Feedback:** Implement graceful fade-in transitions (`opacity-0` to `opacity-100`) as images finish loading perfectly fitting the premium aesthetic. 
- **Fitts' Law Compliance:** Verify that all interactive elements have a minimum target size of 44x44px for seamless touch interactions, particularly on mobile.
- **Interaction Feedback:** Ensure all actionable items (buttons, links, gallery clicks) have snappy, immediate visual feedback (hover states, active states, scaling interactions).

### Step 2: `performance-optimizer` (Loading Speed & Architecture)
- **Preloading Priority:** Audit all pages to ensure critical above-the-fold images (like the hero banner) utilize the `priority={{true}}` flag to command immediate browser fetching. 
- **Lazy Loading Components:** Code-split heavy components beneath the fold (like the gallery masonry grid, or the contact modal) using `next/dynamic` to defer loading until requested, significantly speeding up the initial load time.
- **Script/Font Optimization:** Verify `next/font/google` is preloading fonts correctly and preventing CLS. Ensure no heavy JS bundles block the initial page paint.

### Step 3: `test-engineer` (Validation)
- **Lighthouse/UX Audits:** Run `python .agent/skills/performance-profiling/scripts/lighthouse_audit.py` to baseline and validate improvements, particularly focusing on CLS (Cumulative Layout Shift) caused by the spinners.
- **Core Web Vitals:** Verify that LCP is < 2.5s, CLS is < 0.1, and initial JavaScript bundle sizes are minimized due to the dynamic lazy-loading.
- **Final Checks:** Run the final priority-based script `python .agent/scripts/checklist.py .`

---
*Awaiting User Approval to execute Phase 2.*

# Project Plan: SEO & Indexing Fixes

## Phase 1: Analysis & Discovery
- [x] Audit current metadata and canonical tags across `src/app`.
- [x] Review `sitemap.ts` and `robots.ts` configuration.
- [x] Identify root cause of `www` vs `non-www` conflict (User confirmed `www` preference).

## Phase 2: Planning
- [x] Create `implementation_plan.md`.
- [x] Create `docs/PLAN.md`.
- [ ] Obtain user approval for domain normalization strategy.

## Phase 3: Solutioning (Execution)
- [ ] Implement `src/middleware.ts` for domain redirection.
- [ ] Update `src/app/robots.ts` with crawl optimizations.
- [ ] Standardize any remaining hardcoded URLs.

## Phase 4: Implementation & Verification
- [ ] Run verification scripts for redirects.
- [ ] Verify sitemap structure.
- [ ] Document changes in `walkthrough.md`.

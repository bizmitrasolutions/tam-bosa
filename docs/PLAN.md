# TAM-BoSa Retreat — Full Website Audit & Gap Analysis

## 1. Complete Current State (Every Section Mapped)

### 🏠 Home (`/` — `page.tsx`)
| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Full-viewport hero with parallax, "RIVERSIDE STAY" typography |
| 2 | The Setting (Duality) | River image + Ocean card, asymmetric scroll layout |
| 3 | About Copy | Two-column: tagline + two paragraphs about the homestay, Udupi location, family-friendly |
| 4 | The Essence (3 Pillars) | 01 River Views, 02 Thoughtful Spaces, 03 A Short Walk (to beach) |
| 5 | CTA | "Come spend a few days…" → links to /accommodations |
| 6 | SEO | FAQ schema (location, accommodations) |

> **Missing from Home:** No testimonials section found. No pricing/rates teaser.

---

### 🛏️ Accommodations (`/accommodations` — `ClientPage.tsx`)
| # | Section | Content |
|---|---------|---------|
| 1 | Header | "Comfortable Stays" + subtitle |
| 2 | Room Showcase | 1 room type ("Riverside Guest Rooms") with 5-image carousel |
| 3 | Amenities Grid | 6 items: AC, Wi-Fi, Bathroom, Tea & Coffee, Smart TV, River & Beach Access |
| 4 | Guest Logistics (FAQ) | 4 questions: check-in/out times, beach distance, activities, children policy |
| 5 | SEO | FAQ schema |

> **Missing:** No pricing/rates, no room count/capacity info, no house rules.

---

### 🌴 Experiences (`/experiences` — `ClientPage.tsx`)
| # | Section | Content |
|---|---------|---------|
| 1 | Header | "Explore the Area" + disclaimer about independent local experiences |
| 2 | Timeline | 3 activities: Boating & Kayaking, Delta Beach Visits, Udupi Culture |

> **Missing:** No seasonal/festival highlights, no "how to book" info for activities.

---

### 📸 Gallery (`/gallery` — `ClientPage.tsx`)
| # | Section | Content |
|---|---------|---------|
| 1 | Header | "Visual Storytelling" |
| 2 | Masonry Grid | 6 images with fragmented layout + immersive lightbox overlay |

> **Missing:** No categories/filters, limited to 6 images only.

---

### 📞 Contact (`/contact` — `ClientPage.tsx`)
| # | Section | Content |
|---|---------|---------|
| 1 | Google Map | Embedded interactive map |
| 2 | Info Card | Location + directions from Mangaluru Airport, Phone, Email, Response time |
| 3 | Social Links | Instagram, Facebook (both `#` placeholder links) |
| 4 | CTA Button | "Contact Us" → opens ContactModal |

> **Missing:** Social links are placeholder `#`. No physical address details beyond "Udupi, Karnataka."

---

### 🧩 Global Components
| Component | Features |
|-----------|----------|
| **Navbar** | Floating, scroll-hide, liquid-glass, mobile hamburger, "Reserve" CTA |
| **Footer** | Logo, description, Explore links, Reach Us links, © + Privacy Policy / Terms (both non-functional `<span>`) |
| **ContactModal** | Full reservation form: name, date range picker, guests, room pref, message → WhatsApp |
| **MobileStickyCTA** | Persistent bottom CTA on mobile |
| **GoogleMap** | Embedded map component |

> **Footer Issues:** "Privacy Policy" and "Terms of Service" are non-functional `<span>` elements (no actual pages exist).

---

## 2. Confirmed Missing Sections

Based on the deep audit and your feedback:

| # | Gap | Priority | Where to Add | Notes |
|---|-----|----------|--------------|-------|
| 1 | **House Rules & Policies** | 🔴 High | New section on `/accommodations` OR dedicated `/policies` page | Check-in/out already in FAQ but no cancellation, conduct, pet, damage, or alcohol policies |
| 2 | **Privacy Policy page** | 🔴 High | `/privacy-policy` (new page) | Footer links to it but page doesn't exist |
| 3 | **Terms of Service page** | 🔴 High | `/terms` (new page) | Footer links to it but page doesn't exist |
| 4 | **Social media links** | 🟡 Medium | Footer + Contact page | Instagram & Facebook are `#` placeholders — need real URLs |
| 5 | **Testimonials / Reviews** | 🟡 Medium | Home page | You mentioned these exist but I found no testimonials section in the current `page.tsx` |
| 6 | **Room capacity / pricing info** | 🟢 Low | Accommodations | Optional — depends on whether you want to show rates publicly |

---

## 3. Questions Before Implementation

1. **Testimonials:** You mentioned they're on the home page, but I couldn't find them in the code. Were they removed, or are they planned? Should I add them?
2. **House Rules:** Should these go on the Accommodations page (below FAQ) or as a separate `/policies` page?
3. **Privacy Policy & Terms:** Do you have content for these, or should I generate standard hospitality-industry templates?
4. **Social links:** Do you have your Instagram and Facebook URLs to replace the `#` placeholders?
5. **Pricing:** Do you want rates shown on the website, or keep it inquiry-only via WhatsApp?

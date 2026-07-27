# TechnoTouch Interio — Company Website

Marketing site for **TechnoTouch Interio Pvt Ltd**, an interior design & MEP (Mechanical / Electrical / Plumbing) firm serving Mumbai, Thane and Bhiwandi.

- **Live:** https://technotouchinterio.com
- **Also on:** https://www.technotouchinterio.com · https://technotouchinterio.pages.dev
- **Owner:** Arham
- **Contact on site:** +91 9757092812 / 7021045880 · info@technotouchinterio.com

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages](#4-pages)
5. [Design System](#5-design-system)
6. [Section Class Naming](#6-section-class-naming)
7. [Contact Form (EmailJS)](#7-contact-form-emailjs)
8. [SEO & Metadata](#8-seo--metadata)
9. [Assets & Media](#9-assets--media)
10. [Local Development](#10-local-development)
11. [Hosting & Domain](#11-hosting--domain)
12. [Deployment](#12-deployment)
13. [Backup & Revert Policy](#13-backup--revert-policy)
14. [Marketing Pack (Instagram)](#14-marketing-pack-instagram)
15. [Common Tasks](#15-common-tasks)
16. [Company Details](#16-company-details)

---

## 1. Overview

A single-page static marketing site (with a small blog and a couple of secondary pages). No build step, no server code — pure HTML/CSS/JS deployed as static files to Cloudflare Pages.

Sections on the home page: Hero → About → Team → Services → Why Us → Portfolio → Video Showcase → Testimonials → Instagram → FAQ → Blog Teaser → Contact → Footer, plus a WhatsApp floating CTA.

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Markup | Plain HTML5, no framework |
| Styling | CSS inlined inside `<style>` in each page |
| Scripts | Vanilla JS inlined at end of each page |
| Icons | Font Awesome 6.5.1 (CDN) |
| Fonts | Google Fonts — Playfair Display, Poppins, Oswald |
| Forms | [EmailJS](https://www.emailjs.com/) browser SDK v4 |
| Images | Client photos in `assets/` + a few Unsplash stock images |
| Host | Cloudflare Pages |
| Domain | `technotouchinterio.com` (Cloudflare) |

No package manager, no build tools, no bundler.

## 3. Project Structure

```
TechnoTouchInterior/
├── index.html                     # Main single-page site (~100 KB)
├── project.html                   # Portfolio project detail page (populated by JS)
├── thank-you.html                 # Post-form-submission confirmation
├── blog.html                      # Blog index
├── blog-mep-interior-design.html
├── blog-interior-design-process.html
├── blog-interior-design-mistakes.html
├── article.css                    # Shared styles for blog articles
├── article.js                     # Shared scripts for blog articles
│
├── index-backup.html              # Original pre-Claude backup — DO NOT EDIT
├── index-before-animations-2026-04-17.html
├── index-before-blog-2026-04-17.html
│
├── favicon.ico
├── icon-192.png
├── icon-only.png
├── apple-touch-icon.png
├── logo.png / logo-nav.png / logo-full.png / logo-v2.png / logo.jpeg
├── og-image.jpg                   # Social share preview image
│
├── robots.txt
├── sitemap.xml
│
├── assets/                        # Real client project photos + testimonial headshots
│   ├── Godrej Emerald-1..5.png
│   ├── Crescent Bay-1..4.png
│   ├── about-us.jpg.jpeg
│   ├── Nilakshi Bhattacharya (Crescent Bay project).jpeg
│   ├── Rose Bella - Mr. Bhavesh Ashar.jpeg
│   ├── Ashfaque momin.png / Naveed momin.png / Saim Momin.png / Vandana.png
│   └── reel-1..6.jpg
│
├── .git/                          # Git repo
├── .wrangler/                     # Cloudflare Wrangler cache
├── .netlify/                      # Historical — Netlify is NOT used (see §11)
└── .gitignore
```

## 4. Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | The site — all main sections |
| `/project.html` | `project.html` | Detail template; populated from portfolio-card data-attributes via `goProject()` |
| `/thank-you.html` | `thank-you.html` | Redirect target after a successful form submit |
| `/blog.html` | `blog.html` | Blog index / listing |
| `/blog-mep-interior-design.html` | article | "MEP in Interior Design" |
| `/blog-interior-design-process.html` | article | "Our Interior Design Process" |
| `/blog-interior-design-mistakes.html` | article | "Common Interior Design Mistakes" |

## 5. Design System

CSS custom properties are defined in the `:root` at the top of `index.html`:

```css
:root{
  --g:  #C49A3C;  /* Gold — brand accent */
  --gr: 196,154,60;/* Gold as RGB triples for rgba() */
  --n:  #1A2744;  /* Navy — brand primary */
  --ch: #2C2C2C;  /* Charcoal — headings */
  --bg: #F7F3EE;  /* Warm off-white — page bg */
  --cr: #FAF8F5;  /* Cream — card bg */
  --w:  #fff;
  --t:  #3a3a3a;  /* Body text */
  --m:  #888;     /* Muted text */
  --sf: 'Playfair Display', serif;   /* Display / headings */
  --sn: 'Poppins', sans-serif;       /* Body */
  --e:  cubic-bezier(.4,0,.2,1);     /* Easing */
}
```

**Brand constants** (also used for social/reels — see §14):
- Navy `#1A2744`
- Gold `#C49A3C` (highlight `#E6C678`)
- Tagline: *"Designing Spaces. Defining Lifestyles."*

## 6. Section Class Naming

Two-letter prefixes are used throughout `index.html` — helpful when grepping / editing:

| Prefix | Section |
|---|---|
| `.sv` | Services |
| `.pf` | Portfolio |
| `.wy` | Why Us |
| `.ts` | Testimonials |
| `.fq` | FAQ |
| `.pp` | Popup (consultation modal) |
| `.pj` | Project modal (portfolio detail overlay) |
| `.tm` | Team modal |
| `.ct` | Contact form |
| `.ft` | Footer |
| `.ig` | Instagram section |
| `.hd` | Section header (tag + title) |
| `.rv` | Reveal-on-scroll animation hook |

There is a pro-enhancements block added on **2026-04-17** — look for the header comments:
- `/* === PRO ENHANCEMENTS (2026-04-17) === */` (CSS)
- `/* === PRO ENHANCEMENTS JS === */` (JS)

Inside are labeled features: scroll progress bar, count-up stats, Ken Burns hero, logo marquee, gradient headings, cursor glow, service card tilt, active-nav-on-scroll, testimonial fade edges.

## 7. Contact Form (EmailJS)

Both the popup form (`#popForm`) and the main contact form (`#ctForm`) submit through EmailJS:

```js
emailjs.init('Xz6PtaPkvNGhGTprc');
emailjs.send('service_ydayddk','template_wryzkwd', {name, email, phone, message})
       .then(() => window.location.href = '/thank-you.html');
```

- **Service ID:** `service_ydayddk`
- **Template ID:** `template_wryzkwd`
- **Public key:** `Xz6PtaPkvNGhGTprc`

EmailJS delivers to `info@technotouchinterio.com`. To change template variables, update both the `.send()` call and the template in the EmailJS dashboard.

The WhatsApp CTA (bottom-right floating button) links to:
```
https://wa.me/919757092812?text=Hello%20TechnoTouch%20Interio%20Team%2C%20I%20am%20interested%20to%20know%20more%20about%20your%20home%20interior%20design%20services.
```

## 8. SEO & Metadata

- `<title>` — *TechnoTouch Interio | Premium Interior Design & MEP Solutions in Mumbai, Thane*
- Canonical: `https://technotouchinterio.com/`
- Open Graph + Twitter Card tags in `<head>` (image = `/og-image.jpg`)
- Google Search Console verification meta: `FIYNJoHOtfbXMuZF2Vx7wcLedKIrDBKhC4jgrDlZ1EE`
- **JSON-LD schema** — `InteriorDesignBusiness` with:
  - Founder: Ashfaq Momin · Founded 2020
  - Address: 273, Ayesha Apartment, Wani Ali, Bhiwandi, 421302, Maharashtra, IN
  - Rating: 4.8 / 25 reviews
- `robots.txt` — allow all, sitemap declared
- `sitemap.xml` — homepage, blog index, and 3 article URLs

When adding a new blog article, also add an entry to `sitemap.xml`.

## 9. Assets & Media

- **Real client project photos** — `assets/Godrej Emerald-*.png`, `assets/Crescent Bay-*.png` (used in the portfolio grid and modal galleries)
- **Testimonial headshots** — `assets/Nilakshi Bhattacharya (Crescent Bay project).jpeg`, `assets/Rose Bella - Mr. Bhavesh Ashar.jpeg`
- **Team photos** — `assets/Ashfaque momin.png`, `assets/Naveed momin.png`, `assets/Saim Momin.png`, `assets/Vandana.png`
- **Some portfolio tiles** still use Unsplash images (Rosa Bella bedroom, Piramal Vaikunth, Raheja Classic, Lodha Splendora, TechStart Office, Regency) — swap with real photos as they become available
- **Video** — `InShot_20230706_120039645 (online-video-cutter.com) (1).mp4` (used in the video showcase and as bg music for reels)

## 10. Local Development

No build step. Any static server works. From the project directory:

```bash
python -m http.server 8080
# or
npx serve .
# or
wrangler pages dev .
```

Then open `http://localhost:8080/`.

Edit `index.html` directly — CSS is in the top `<style>` block, JS is at the bottom.

## 11. Hosting & Domain

- **Host:** Cloudflare Pages
- **Project name:** `technotouchinterio`
- **Domains (all on Cloudflare):**
  - `technotouchinterio.com` (apex, primary)
  - `www.technotouchinterio.com`
  - `technotouchinterio.pages.dev` (Cloudflare default subdomain)
- Every deploy also produces a preview URL: `https://<hash>.technotouchinterio.pages.dev`

**Netlify is NOT used.** A stale `.netlify/` folder exists in the repo but `netlify deploy` returns 403. Ignore it.

## 12. Deployment

Deploy from the project directory with Wrangler:

```bash
wrangler pages deploy . --project-name=technotouchinterio --commit-dirty=true
```

Requirements:
- `wrangler` installed (`npm i -g wrangler`)
- Logged in to Cloudflare (`wrangler login`) on the account that owns the `technotouchinterio` Pages project

Typical flow:

1. Edit `index.html` (or article files).
2. If it's a big change, make a dated backup first — see §13.
3. Run the deploy command above.
4. Wrangler prints a preview URL and, once promoted to production, the change is live on `technotouchinterio.com` within ~30 s.

## 13. Backup & Revert Policy

Before any batch of substantial changes to `index.html`, snapshot it:

```
index-before-<short-description>-YYYY-MM-DD.html
```

Existing snapshots:

| File | Snapshot before |
|---|---|
| `index-backup.html` | Original pre-Claude state — **do not edit** |
| `index-before-animations-2026-04-17.html` | Pro-animations batch (scroll bar, count-up, Ken Burns, logo marquee, gradient headings, cursor glow, tilt, active nav, testimonial fade edges) |
| `index-before-blog-2026-04-17.html` | Adding the blog teaser section + blog pages |

**Reverting:**
- **Full revert** — `cp <backup>.html index.html` then redeploy (§12).
- **Specific feature revert** — remove only the corresponding block from `index.html`. The pro-enhancement CSS and JS blocks are wrapped with the header comments listed in §6, and individual features inside are commented (Scroll progress bar, Count-up stats, Cursor glow, etc.).
- **Always redeploy** after a revert.

## 14. Marketing Pack (Instagram)

Content lives outside this repo but is generated from assets here:

| Folder | Contents |
|---|---|
| `C:\Arham\Backup\TechnoTouch-Marketing\` | 24 video reels (1080×1920 vertical + 1080×1080 square) — 2-month reel calendar |
| `C:\Arham\Backup\TechnoTouch-Posts\` | 30 static image posts (1080×1080 + 1080×1920 story) — 10-week image calendar |
| `C:\Arham\WebProjects\_dlife_frames\` | Build scripts (ffmpeg + Python/PIL) |

Each output folder has its own `README.txt` with the posting schedule, captions, hashtag bank and content calendar.

**Build scripts:**
- `make_all_marketing.sh` — reels 1-6
- `make_remaining.sh` — reels 5-6 rebuild
- `make_content_calendar.sh` — reels 7-15
- `make_extension.sh` — reels 16-24
- `make_image_posts.py` — posts P01-P18 + S01-S06
- `make_image_posts_extra.py` — posts P19-P22 + S07-S08
- `preprocess_logos.py` — converts `logo-nav.png` / `logo-full.png` to white+gold-on-transparent variants (cached)
- `bg_library/` — 12 Unsplash interior backdrops used across reels/posts

Shared reel assets pulled from **this** website:
- Background image: `assets/about-us.jpg.jpeg`
- Music: `InShot_20230706_120039645 (online-video-cutter.com) (1).mp4`
- Watermark: pre-processed `logo-nav-dark.png`
- End card: pre-processed `logo-full-dark.png`
- Fonts: Impact (headlines), Arial Bold (body)

**Instagram / socials linked from the site:**
- Instagram: https://www.instagram.com/technotouch2020
- Facebook: https://www.facebook.com/technotouchinterio
- YouTube: https://www.youtube.com/@technotouchinterio
- LinkedIn: https://www.linkedin.com/company/technotouch-interio

## 15. Common Tasks

**Edit copy or reorder sections** — open `index.html`, edit in place, redeploy.

**Add a portfolio project** — duplicate one of the `.pf` cards in the portfolio grid (~line 696+). Fill in `data-name`, `data-loc`, `data-desc`, `data-img`, `data-gallery` (pipe-separated), `data-type`, `data-style`, `data-area`, `data-client`, `data-review`, optional `data-clientimg`. Drop the images into `assets/`.

**Add a testimonial** — duplicate a `.ts-c` block in the testimonials track. The track duplicates each entry for the infinite-marquee effect — keep the duplicate in sync.

**Add a team member** — duplicate a team card and add `data-*` for `showTeam()`.

**Add a blog article:**
1. Copy an existing `blog-*.html` as a starting point (they share `article.css` + `article.js`).
2. Add a card to `blog.html`.
3. Add the URL to `sitemap.xml` with today's `<lastmod>`.
4. Update the teaser section in `index.html` if the article should be featured.
5. Deploy.

**Change the contact-form destination** — update the EmailJS template in the dashboard (template ID `template_wryzkwd`). No code change needed if the fields stay the same.

**Change the WhatsApp number / message** — grep for `wa.me/919757092812` in `index.html`.

## 16. Company Details

| | |
|---|---|
| Legal name | TechnoTouch Interio Pvt Ltd |
| Founder | Ashfaq Momin |
| Founded | 2020 |
| Address | 273, Ayesha Apartment, Wani Ali, Bhiwandi — 421302, Maharashtra, India |
| Phone | +91 9757092812 / +91 7021045880 |
| Email | info@technotouchinterio.com |
| GSTIN | 27AAICT1134D1ZO |
| Service areas | Mumbai, Thane, Bhiwandi, Navi Mumbai and surrounding Maharashtra |
| Services | Interior design & space planning · Turnkey execution · Residential interiors · Retail & commercial interiors · MEP solutions · Custom furniture & modular |

---

*Last updated: 2026-07-27*

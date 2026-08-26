# Halvyn / Planvio Brand Guide

_Last updated 2026-08-26. Source of truth for the website and the app theme._

## Structure

| | Name | Used for |
|---|---|---|
| **Company** | **Halvyn** | The legal entity, contracts, invoices, footer, careers, email domain |
| **Product** | **Planvio** | The app itself, the marketing site, all customer-facing product language |

Written together as **"Planvio, by Halvyn"**. Never "Halvyn Planvio".
Never write the company name inside the product UI.

### Site structure

The website is a **company site first**. Halvyn is the front door; Planvio is
the product it showcases.

| Page | Identity | Logo | Favicon |
|---|---|---|---|
| `index.html` at `halvyn.pages.dev` | Halvyn | `assets/halvyn-mark.svg` | `assets/favicon.svg` |
| `planvio.html` | Planvio | `assets/mark.svg` | `assets/favicon-planvio.svg` |

Both pages share `styles.css` and the same steel accent. **Halvyn is the primary
identity** and steel blue is the house colour, inherited by Planvio rather than
owned by it. If Halvyn ever ships a second product, that product may take its
own accent on its own page, and Halvyn stays steel.

### Name clearance (checked 2026-08-26)

**Halvyn** came back completely clear. A web search for the name as a company
returned no matching business in any industry or country. Of twelve candidate
names checked, only Halvyn and Obrivo were unclaimed. Rejected for collisions:
Suvent (SuVent, Spanish window manufacturer, LinkedIn handle taken), Meridio
(Meridio Solutions, project management software for government), Kaviro (Kaviro
Tech), Zentari (Zentari Systems, software), Nevari (UK AI platform), Solvane
(Solvane Group, $50M restoration holding), plus Lumeva, Calyra, Tavero, Vianta,
and Orenta.

Fallback if Halvyn ever becomes a problem: **Obrivo** (also verified clear).

**Planvio** has no owner in software, but note **Planview**, a large
project-portfolio-management vendor in the same market with a similar sound. Get a
trademark opinion before spending on brand assets. Fallback product names if it
becomes a problem: Zentro, Opsline, Worklane.

## What Planvio is

An all-in-one project operations platform: leads and CRM, estimating, planning and
scheduling, delivery tracking, timesheets, invoicing and accounting, HR, and
quality and safety, in one app instead of five tools and a spreadsheet.

**Explicitly industry-neutral.** It suits a software team running sprints and a
services company running field crews. Never describe Planvio as "construction
software" or "IT software" in marketing copy.

## Tagline

**Primary:** Every project. One platform.
**Secondary:** From first lead to final invoice.

## Voice

Plain, specific, confident. Talk about the actual work (estimates, schedules,
invoices, approvals, timesheets), not abstractions.

**Banned words:** elevate, seamless, unleash, revolutionize, next-gen, supercharge,
game-changing, synergy, empower.

**Good:** "Quote a job, plan the work, track the hours, send the invoice. One system."
**Bad:** "Elevate your workflow with next-gen project intelligence."

## Palette (locked, one accent, used everywhere)

A single **light** theme: warm near-white paper with a cold steel-blue accent.
Calm, editorial, and established, which suits the Nordic sound of the name.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FAFAF8` | Page background, warm near-white |
| `--surface` | `#FFFFFF` | Cards and raised panels |
| `--surface-2` | `#F3F3EF` | Subtle fills, footer, hover |
| `--surface-3` | `#ECECE6` | Deeper fills |
| `--line` | `#E3E3DC` | Borders |
| `--line-soft` | `#EBEBE5` | Hairlines inside panels |
| `--text` | `#12161B` | Primary text |
| `--text-mid` | `#39434E` | List and secondary body text |
| `--text-mute` | `#5F6B75` | Muted text, labels |
| **`--accent`** | `#2C6E8F` | **The brand accent.** Buttons, links, active states, the marks |
| `--accent-deep` | `#1A4A62` | Hover and pressed states, the darker half of the logo |
| `--accent-wash` | `#EAF2F6` | Tinted panel backgrounds, chips |
| `--on-accent` | `#FFFFFF` | Text on top of accent fills |
| `--danger` | `#A8262C` | Form errors only, never decorative |

Steel blue is the only accent. **No emerald, no violet, no cyan, no navy.**
Emerald was an earlier direction and is retired. Violet, cyan, and navy belong
to the old Sand Star / Polaris360 look.

Contrast is verified: white on `--accent` is 5.7:1, `--accent` on `--paper` is
5.5:1, and `--text-mute` on `--paper` is 5.5:1. All pass WCAG AA.

Status colours (in-app only): green = good, amber = attention, red = problem,
slate = neutral. Semantic states, not brand colours.

### App theme equivalents (oklch, wired in `planvio-app/src/index.css`)

```
light  --primary: oklch(0.50 0.080 233)   --accent: oklch(0.66 0.070 233)
dark   --primary: oklch(0.70 0.085 233)   --accent: oklch(0.72 0.075 233)
```

Hue **233** is the house hue. The old app used hue 250 (navy) and 175 (teal).

## Type

| Use | Face | Weights |
|---|---|---|
| Display and body (site) | **Plus Jakarta Sans** | 400, 500, 600, 700, 800 |
| Numbers, codes, labels | **JetBrains Mono** | 400, 500 |
| App UI | Public Sans (already self-hosted, CSP-safe) | keep as-is |

Never Inter. Headlines are tight (`letter-spacing: -0.03em`), body is relaxed
(`line-height: 1.65`, max 65 characters per line).

## Logos

Both marks are **abstract geometry, not letterforms**, and both are built from
the same shape: a **keystone**, the wedge that locks an arch together. It is the
piece everything else rests on, which is the honest description of what Halvyn
builds.

**Halvyn** is one keystone, split down the middle into two tones so it reads as
light falling across a single solid form. `--accent-deep` on the left,
`--accent` on the right.

**Planvio** is three keystones in ascending order: the same structural form put
into sequence. Plan, then the way through it. Tones step from `#7FA8BC` through
`--accent` to `--accent-deep`.

The marks sit on the page with **no tile behind them**, which suits the light
editorial theme. Only the favicons use a filled tile, because a thin shape
disappears at 16 pixels.

| File | What |
|---|---|
| `assets/halvyn-mark.svg` | Halvyn keystone, transparent background |
| `assets/mark.svg` | Planvio ascending keystones, transparent background |
| `assets/favicon.svg` | Halvyn on a filled `--accent-deep` tile |
| `assets/favicon-planvio.svg` | Planvio on a filled `--accent` tile |

**Wordmarks:** `halvyn` and `planvio` in Plus Jakarta Sans, weight 800,
lowercase, `letter-spacing: -0.035em`. The horizontal lockup is composed in HTML
so the webfont applies to the wordmark rather than being outlined into the SVG.

Clear space around a lockup equals the width of the mark. Never stretch,
recolour outside the palette, add effects, or rebuild either mark as a letter.

## Hosting

- **Domain:** `halvyn.co.in`, registered at GoDaddy.
- **Site:** static HTML and CSS, no build step. Served free by GitHub Pages,
  with GoDaddy keeping DNS. See `DEPLOY.md` for the exact records.
- **Registering a domain is not hosting.** GoDaddy sold the name only. The files
  are served by GitHub Pages, which also issues the free HTTPS certificate.
- The `CNAME` file in the repository root holds `halvyn.co.in` so GitHub keeps
  the custom domain across redeploys. Do not delete it.
- The Planvio product page lives at `halvyn.co.in/planvio.html`. If Planvio ever
  needs its own domain, `planvio.app` runs roughly $14 to $20 a year.

## Positioning line (for ads)

> Still running projects across spreadsheets, email, and QuickBooks?
> Planvio puts estimating, scheduling, timesheets, and invoicing in one place.

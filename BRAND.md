# Halvyn / Planvio — Brand Guide

_Last updated 2026-08-26. Source of truth for the website and the app theme._

## Structure

| | Name | Used for |
|---|---|---|
| **Company** | **Halvyn** | The legal entity, contracts, invoices, footer, careers, email domain |
| **Product** | **Planvio** | The app itself, the marketing site, all customer-facing product language |

Written together as **"Planvio, by Halvyn"**. Never "Halvyn Planvio".
Never write the company name inside the product UI.

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

The site runs a single dark theme. The app runs light with the same accent hue.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0A1210` | Page background |
| `--ink-2` | `#101A17` | Raised surfaces, cards |
| `--ink-3` | `#16221E` | Hover surfaces, input fills |
| `--line` | `#1E2C27` | Borders, hairlines |
| `--mist` | `#E6EFEA` | Primary text |
| `--mute` | `#93A79E` | Secondary text |
| **`--accent`** | `#35C48C` | **The brand accent.** Buttons, links, active states, the logo mark |
| `--accent-deep` | `#1B8F66` | Hover and pressed states, deep fills |
| `--on-accent` | `#06110D` | Text on top of accent fills |

Emerald is the only accent. No violet, no cyan, no navy. Those belong to the old
Sand Star / Polaris360 look and must not appear anywhere in Planvio.

Status colours (in-app only): emerald = good, amber = attention, rose = problem,
slate = neutral. Semantic states, not brand colours.

### App theme equivalents (oklch, wired in `planvio-app/src/index.css`)

```
light  --primary: oklch(0.55 0.125 165)   --accent: oklch(0.74 0.135 165)
dark   --primary: oklch(0.70 0.145 165)   --accent: oklch(0.70 0.130 165)
```

Hue **165** is the Planvio hue. The old app used hue 250 (navy) and 175 (teal).

## Type

| Use | Face | Weights |
|---|---|---|
| Display and body (site) | **Plus Jakarta Sans** | 400, 500, 600, 700, 800 |
| Numbers, codes, labels | **JetBrains Mono** | 400, 500 |
| App UI | Public Sans (already self-hosted, CSP-safe) | keep as-is |

Never Inter. Headlines are tight (`letter-spacing: -0.03em`), body is relaxed
(`line-height: 1.65`, max 65 characters per line).

## Logo

**Mark:** a rounded emerald tile containing a route, a path that steps up and to the
right through two nodes. It reads as "the way the plan runs".

**Wordmark:** `planvio` in Plus Jakarta Sans, weight 800, lowercase,
`letter-spacing: -0.035em`.

Files: `assets/mark.svg` (mark only), `assets/favicon.svg` (tab icon).
The horizontal lockup is composed in HTML so the webfont applies to the wordmark.

Clear space around the lockup equals the mark's corner radius. Never stretch,
recolour outside the palette, or add effects.

## Hosting

- **Site:** static HTML and CSS, no build step. Deploys free to GitHub Pages or
  Cloudflare Pages. See `DEPLOY.md`.
- **Free domain** is the host subdomain (`<user>.github.io/planvio-site` or
  `planvio.pages.dev`). Truly free custom TLDs no longer exist since Freenom
  stopped issuing them. Budget roughly $12 to $40 per year for `planvio.app`
  once you start selling.

## Positioning line (for ads)

> Still running projects across spreadsheets, email, and QuickBooks?
> Planvio puts estimating, scheduling, timesheets, and invoicing in one place.

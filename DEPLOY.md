# Deploying the Halvyn site for free

The site is plain HTML and CSS. There is no build step, no npm install, and no
server. Any static host will serve it. Two free options below.

## Files

The site is a **company site** (Halvyn) that showcases the product (Planvio).

```
halvyn-site/
├── index.html                   Halvyn company homepage
├── planvio.html                 Planvio product page
├── styles.css                   shared design system, both pages
├── assets/halvyn-mark.svg       Halvyn logo mark
├── assets/mark.svg              Planvio logo mark
├── assets/favicon.svg           Halvyn tab icon (used by index.html)
├── assets/favicon-planvio.svg   Planvio tab icon (used by planvio.html)
├── BRAND.md                     brand guide (published but harmless; delete if you prefer)
└── DEPLOY.md                    this file
```

`index.html` is the front door at `halvyn.pages.dev`. Ads that promote Planvio
should link straight to `halvyn.pages.dev/planvio.html`.

---

## Option A: GitHub Pages (recommended)

Free, no credit card, and you already use git.

1. Create a new **public** repository on GitHub called `halvyn-site`.
2. From this folder, run:

```bash
git init && git add . && git commit -m "Planvio marketing site" && git branch -M main && git remote add origin https://github.com/YOUR-USERNAME/halvyn-site.git && git push -u origin main
```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. Wait about a minute. The site is live at:

```
https://YOUR-USERNAME.github.io/halvyn-site/
```

Every later `git push` redeploys automatically.

---

## Option B: Cloudflare Pages

Slightly nicer URL and faster globally.

1. Push the folder to GitHub as above.
2. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Leave the build command **empty** and the output directory as `/`.
4. **Name the project `halvyn`** (lowercase, this becomes the subdomain).
5. Deploy. The site is live at `https://halvyn.pages.dev`.

Both `halvyn` and `planvio` were confirmed unclaimed on 2026-08-26. Cloudflare
project names are globally unique and claimed on creation, so consider creating
a second empty `planvio` project to reserve that name too. It costs nothing, and
you can point it at the same repo later if you decide the product name suits ad
traffic better.

---

## About the "free domain"

There is no longer a genuinely free custom domain. Freenom stopped issuing
`.tk`, `.ml`, `.ga`, `.cf`, and `.gq` names, so the old free-TLD route is gone.

What you actually get for free is the **host subdomain**:

- `halvyn.pages.dev` (chosen)
- `yourname.github.io/halvyn-site`

That is fine for validating the idea and running your first ads. When you are
ready to look established, a real domain costs roughly **$12 to $40 per year**.
Note that Cloudflare Pages supports custom domains **on the free plan**, so
attaching one later costs nothing beyond the domain itself:

| Domain | Rough yearly cost | Notes |
|---|---|---|
| `planvio.app` | $14 to $20 | Best fit, forces HTTPS |
| `planvio.io` | $32 to $45 | Common for software, pricier |
| `planvio.com` | $10 to $15 | Check availability first |
| `getplanvio.com` | $10 to $15 | Fallback if the bare name is gone |

Buy from Cloudflare Registrar (sold at cost, no markup) or Namecheap. Then in
GitHub Pages or Cloudflare Pages add the custom domain and follow the DNS
instructions. Both give you free HTTPS.

---

## Before you run ads, finish these

1. **Wire up BOTH forms.** `index.html` (contact) and `planvio.html` (demo
   request) each have `var ENDPOINT = '';` near the bottom. Paste your Power
   Automate lead-flow HTTP URL or a free Formspree endpoint into both. Until
   then they fall back to opening the visitor's email client, which works but
   loses some leads.
2. **Replace the contact address.** `hello@halvyn.com` appears in both pages.
   Point it at a mailbox you actually read.
3. **Add real product screenshots.** The hero currently shows an honest flow
   diagram. Once the demo environment is seeded with fake company data, capture
   screenshots and add them below the hero. Do not use screenshots containing
   real Sand Star data.
4. **Set a price signal.** The pricing section says "Custom quote". A visible
   starting number measurably increases demo bookings for business software.
   The `TODO pricing` comment marks the spot.
5. **Add analytics.** Google Analytics or Plausible, so you can tell which ad
   channel produced which demo request.
6. **Swap the audience photos.** The two photos in the "Who it's for" section
   load from picsum.photos as placeholders. Replace them with licensed stock or
   your own photography before launch.

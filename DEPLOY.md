# Deploying the Planvio site for free

The site is plain HTML and CSS. There is no build step, no npm install, and no
server. Any static host will serve it. Two free options below.

## Files

```
planvio-site/
├── index.html          the whole page
├── styles.css          the design system
├── assets/mark.svg     logo mark
├── assets/favicon.svg  browser tab icon
├── BRAND.md            brand guide (not published, keep for reference)
└── DEPLOY.md           this file
```

---

## Option A: GitHub Pages (recommended)

Free, no credit card, and you already use git.

1. Create a new **public** repository on GitHub called `planvio-site`.
2. From this folder, run:

```bash
git init && git add . && git commit -m "Planvio marketing site" && git branch -M main && git remote add origin https://github.com/YOUR-USERNAME/planvio-site.git && git push -u origin main
```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. Wait about a minute. The site is live at:

```
https://YOUR-USERNAME.github.io/planvio-site/
```

Every later `git push` redeploys automatically.

---

## Option B: Cloudflare Pages

Slightly nicer URL and faster globally.

1. Push the folder to GitHub as above.
2. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Leave the build command **empty** and the output directory as `/`.
4. Deploy. The site is live at `https://planvio.pages.dev`.

---

## About the "free domain"

There is no longer a genuinely free custom domain. Freenom stopped issuing
`.tk`, `.ml`, `.ga`, `.cf`, and `.gq` names, so the old free-TLD route is gone.

What you actually get for free is the **host subdomain**:

- `yourname.github.io/planvio-site`
- `planvio.pages.dev`

Both are fine for validating the idea and running your first ads. When you are
ready to look established, a real domain costs roughly **$12 to $40 per year**:

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

1. **Wire up the form.** Open `index.html`, find `var ENDPOINT = '';` near the
   bottom, and paste either your Power Automate lead-flow HTTP URL or a free
   Formspree endpoint. Until then the form falls back to opening the visitor's
   email client, which works but loses some leads.
2. **Replace the contact address.** `hello@planvio.app` appears twice in
   `index.html`. Point it at a mailbox you actually read.
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

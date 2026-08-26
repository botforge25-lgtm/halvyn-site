# Deploying halvyn.co.in

The site is plain HTML and CSS. There is no build step, no npm install, and no
server. The domain `halvyn.co.in` is registered at GoDaddy.

## Files

The site is a **company site** (Halvyn) that showcases the product (Planvio).

```
halvyn-site/
├── index.html                   Halvyn company homepage
├── planvio.html                 Planvio product page
├── styles.css                   shared design system, both pages
├── CNAME                        custom domain for GitHub Pages
├── assets/halvyn-mark.svg       Halvyn logo mark
├── assets/mark.svg              Planvio logo mark
├── assets/favicon.svg           Halvyn tab icon (index.html)
├── assets/favicon-planvio.svg   Planvio tab icon (planvio.html)
├── BRAND.md                     brand guide
└── DEPLOY.md                    this file
```

`index.html` is the front door at `halvyn.co.in`. Ads promoting Planvio should
link straight to `halvyn.co.in/planvio.html`.

---

## Important: registering a domain is not hosting

GoDaddy sold you the **name**. It does not serve your files. You still need a
host, and you do not need to buy one: GitHub Pages will serve this site for free
and issue a free HTTPS certificate for `halvyn.co.in`.

The GoDaddy MCP connector cannot help with any of this. It only exposes domain
availability search and name suggestions, with no access to DNS records,
nameservers, or hosting. Every step below is done by hand in the GoDaddy and
GitHub web interfaces.

---

## Step 0: validate WHOIS first (do this today)

The domain dashboard shows **"Your domain is pending WHOIS verification"**.

Click **Validate**, then open the confirmation email GoDaddy sends to the
registrant address and click the link in it. ICANN requires registrars to
**suspend** a domain that stays unverified past the deadline, which would take
`halvyn.co.in` offline entirely. Some DNS and nameserver changes are also
blocked while it is pending, so this can silently break the steps below.

Do not continue until the yellow banner is gone.

---

## Step 1: put the site on GitHub

Create a **public** repository called `halvyn-site` on GitHub, then:

```bash
git -C "C:/Users/admin/Desktop/halvyn-site" remote add origin https://github.com/YOUR-USERNAME/halvyn-site.git
```

```bash
git -C "C:/Users/admin/Desktop/halvyn-site" push -u origin main
```

## Step 2: turn on GitHub Pages

In the repository: **Settings → Pages → Build and deployment**.
Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.

Wait about a minute, then confirm the site loads at
`https://YOUR-USERNAME.github.io/halvyn-site/` before touching DNS. If it does
not load, fix that first. DNS problems are much harder to diagnose on top of a
broken build.

## Step 3: point the domain at GitHub (GoDaddy DNS)

Go to **GoDaddy → My Products → halvyn.co.in → DNS → DNS Records**.

**First, delete the existing parked record.** There is currently an
`A` record on `@` with the value **Parked**. That is GoDaddy's placeholder page
and it will win over anything you add. Delete it.

Then add these records:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | 600 seconds |
| A | @ | `185.199.109.153` | 600 seconds |
| A | @ | `185.199.110.153` | 600 seconds |
| A | @ | `185.199.111.153` | 600 seconds |
| CNAME | www | `YOUR-USERNAME.github.io` | 1 hour |

Optionally also add IPv6, which lets the site load on IPv6-only networks:

| Type | Name | Value |
|---|---|---|
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

**Leave everything else alone.** The two `NS` records pointing at
`ns67.domaincontrol.com` and `ns68.domaincontrol.com` are GoDaddy's own
nameservers and must stay. The `email` and `_domainkey` CNAME records belong to
GoDaddy email and DKIM signing; deleting them breaks your mail.

## Step 4: attach the domain in GitHub

Back in **Settings → Pages → Custom domain**, enter `halvyn.co.in` and save.
GitHub will run a DNS check. Once it passes, tick **Enforce HTTPS**.

The `CNAME` file in this repository already contains `halvyn.co.in`, so GitHub
picks the domain up automatically and a redeploy will not wipe it.

DNS usually propagates in 10 to 30 minutes on a 600 second TTL, but allow up to
24 hours. The HTTPS certificate is issued after DNS resolves, so **Enforce
HTTPS** may stay greyed out for an hour or so. That is normal.

---

## Verifying it worked

```bash
nslookup halvyn.co.in
```

You want the four `185.199.x.153` addresses back, not a GoDaddy parking IP.
Then open `https://halvyn.co.in` and check that the padlock is present and the
Planvio link in the nav works.

---

## Alternative: Cloudflare Pages

Cloudflare Pages is faster globally and has a better dashboard, but it needs you
to **change your nameservers** at GoDaddy to Cloudflare's, because an apex
domain like `halvyn.co.in` cannot use a plain CNAME and Cloudflare solves that
with CNAME flattening.

That is a bigger change than adding a few records, and nameserver changes are
one of the actions commonly blocked while WHOIS verification is pending. Start
with GitHub Pages. Move to Cloudflare later if you want the extra speed, with no
change to these files.

---

## Before you run ads, finish these

1. **Wire up both forms.** `index.html` (contact) and `planvio.html` (demo
   request) each have `var ENDPOINT = '';` near the bottom. Paste your Power
   Automate lead-flow HTTP URL or a free Formspree endpoint into both. Until
   then they fall back to opening the visitor's email client, which works but
   loses some leads.
2. **Create the mailbox.** Both pages now point at `info@halvyn.co.in`, and the
   contact forms fall back to it when no `ENDPOINT` is set. That address has to
   actually receive mail. You already have GoDaddy email DNS records in place
   (`email.secureserver.net` plus the DKIM CNAMEs), so a mailbox on this domain
   should be available under your GoDaddy account. Send yourself a test message
   before running any ads.
3. **Fix the About facts.** `index.html` has a `TODO` for your registered
   location, and "Founded 2026" is an assumption that should be confirmed.
4. **Add real product screenshots.** The Planvio page currently shows an honest
   flow diagram. Once the demo environment is seeded with fictional company
   data, capture screenshots and add them. Never use screenshots containing real
   Sand Star data.
5. **Set a price signal.** The pricing section says "Custom quote". A visible
   starting number measurably increases demo bookings for business software.
   The `TODO pricing` comment marks the spot.
6. **Add analytics.** Google Analytics or Plausible, so you can tell which ad
   channel produced which enquiry.
7. **Swap the audience photos.** The two photos on the Planvio page load from
   picsum.photos as placeholders. Replace them with licensed stock or your own
   photography before launch.

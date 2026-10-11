# CalTools

Personal site for small calculators and everyday tools, served at **https://caltools.eu.org**.

Built with [Astro](https://astro.build) as a static site and deployed on Cloudflare Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # output -> dist/
npm run preview  # preview the production build
```

## Deploy

Cloudflare Pages, Git-connected:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`

Custom domain `caltools.eu.org` is attached in the Cloudflare Pages project once the EU.org delegation is active.

### www → apex redirect

`functions/_middleware.js` issues a `301` from `www.caltools.eu.org` to `caltools.eu.org`.
For it to run, also add `www.caltools.eu.org` as a custom domain on the Pages project so requests reach the Function.

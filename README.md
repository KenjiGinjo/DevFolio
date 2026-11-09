# DevFolio

A developer portfolio you can fork and make your own: profile, skill scores, and per-skill experience notes.

**[Live demo](https://kenjiginjo.com/)** · MIT License

This repository is Kenji Ginjo's portfolio. Forks should replace the profile, photo, and skill notes before publishing. The MIT license does not cover a person's name, photo, or biography.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui

## Quick start

```bash
git clone https://github.com/KenjiGinjo/DevFolio.git
cd DevFolio
pnpm install
pnpm dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command | What it does |
|---------|----------------|
| `pnpm dev` | Local preview |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Serve the production build locally |

## Make it yours

Change these two files first:

1. [`src/data/profile.ts`](src/data/profile.ts) — name, bio, photo, email, social links
2. [`src/data/skills.ts`](src/data/skills.ts) — skills, self-rated scores, and notes

Then:

- Replace `public/profile-photo.jpeg` with your photo
- Put social icons in `public/` and point to them from `profile.socials`
- Update `index.html` / `public/site.webmanifest` if you want a different tab title or PWA name

The number on each card is the `baseLevel` you write. It is a self-rating, capped at 100. Adding more notes does not raise it. Replace the skill notes before you publish the site as your own.

## Deploy

This is a static Vite app. After `pnpm build`, host the `dist/` folder anywhere:

- [Vercel](https://vercel.com/) — import the GitHub repo, framework preset Vite
- [Netlify](https://www.netlify.com/) / [Cloudflare Pages](https://pages.cloudflare.com/) — same idea
- Any Nginx/Caddy server — serve `dist/` as the site root

`pnpm deploy` uploads `dist/` to a personal server via SSH. It is optional. If you use it, copy `.env.example` to `.env`, fill in the host, and authenticate with an SSH key. The script does not accept a password. Do not commit `.env`.

## License

[MIT](LICENSE) for the source code. It does not include a person's name, photo, biography, or contact details. Replace the sample profile and skill notes before you publish.

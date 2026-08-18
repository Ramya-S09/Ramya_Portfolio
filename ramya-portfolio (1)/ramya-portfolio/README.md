# Ramya S — Portfolio

A personal portfolio site built with **React + Vite**, styled with plain CSS
(no external UI framework). The design theme is a "network operations
dashboard" — nodding to the VoIP/networking background in the resume — with
an animated signal trace, panel-style sections, and a signal-green /
amber accent palette on a dark background.

## What's inside

```
ramya-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── Ramya_S_Resume.pdf     ← wired to the "Download resume" button
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               ← design tokens (colors, fonts, spacing)
    ├── data.js                 ← ALL resume content lives here
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx / .css
        ├── Education.jsx / .css
        ├── Certifications.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Running it locally

You'll need Node.js 18+ installed (download from nodejs.org). Then, from
inside the `ramya-portfolio` folder:

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the local dev server
npm run dev
```

Vite will print a local URL (usually http://localhost:5173) — open it in
your browser. The page hot-reloads as you edit files.

## Building for production / deployment

```bash
npm run build
```

This outputs a static site into a `dist/` folder. You can deploy that
folder as-is to any static host:

- Vercel: `npm i -g vercel` then run `vercel` inside the project folder
- Netlify: drag-and-drop the `dist/` folder onto netlify.com/drop, or
  connect the repo and set build command `npm run build`, publish dir `dist`
- GitHub Pages: push this folder to a repo, then use the `gh-pages`
  package or GitHub Actions to publish `dist/`

To preview the production build locally before deploying:

```bash
npm run preview
```

## Editing your content

Everything text-based (name, summary, skills, experience, projects,
education, certifications, contact links) is centralized in
`src/data.js` — edit that one file to update the whole site without
touching any component markup.

To swap the downloadable resume, replace `public/Ramya_S_Resume.pdf`
with your updated file (keep the same filename, or update the href in
`src/components/Hero.jsx`).

## Tech stack

- React 19 + Vite
- Plain CSS with custom properties (no Tailwind/Bootstrap dependency)
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (data/labels)

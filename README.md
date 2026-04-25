# Momin Aftab — Portfolio

Built with **React + Vite**.

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

## Structure

```
src/
├── assets/
│   └── momin.jpg              # your photo
├── components/
│   ├── Cursor.jsx             # custom neon cursor
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── Ticker.jsx / .css
│   ├── About.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Brands.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Contact.jsx / .css
│   ├── Footer.jsx / .css
│   └── useReveal.js           # scroll-reveal hook
├── App.jsx
├── main.jsx
└── index.css                  # design tokens + global styles
```

## Deploying

- **Vercel**: connect repo, framework = Vite, done.
- **Netlify**: drag `/dist` folder after `npm run build`.
- **GitHub Pages**: use `vite-plugin-gh-pages`.

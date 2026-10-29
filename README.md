# Varsha Jadhav: React Portfolio

React 18 + Vite + React Router. Every section is its own page and its own lazy-loaded chunk.

| Route | File |
|---|---|
| `/` Home | `src/pages/Home.jsx` |
| `/about` About me | `src/pages/About.jsx` |
| `/projects` Projects | `src/pages/Projects.jsx` |
| `/skills` Skills | `src/pages/Skills.jsx` |
| `/resume` Resume | `src/pages/Resume.jsx` |
| `/contact` Contact | `src/pages/Contact.jsx` |

All text lives in `src/data.js`. Edit it there.

## 1. Run and build

```bash
npm install
npm run dev        # development at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve dist/ locally at http://localhost:4173
```

**Performance already set up**
- Lazy components: `React.lazy` + `Suspense` in `src/App.jsx` (one chunk per page).
- Lazy images: `src/components/LazyImage.jsx` uses `loading="lazy"`, `decoding="async"` and fixed width/height.
- Minified JS (esbuild) and CSS, vendor code split into its own cached chunk (`vite.config.js`).

## 2. Verify the production build locally
With `npm run preview` running, check:
- Every nav link opens its page, and refreshing on `/projects` still works.
- Resume page: "Download PDF" downloads the file.
- Contact form opens your email app with the message filled in.
- DevTools > Network: only the current page's JS chunk loads, and project images load as you scroll to them.
- DevTools > Lighthouse: aim for 90+ on Performance, Accessibility and SEO.

## 3. Deploy
**Netlify (easiest):** push to GitHub, then Add new site > Import from Git. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`). `public/_redirects` makes page refreshes work.

**Vercel:** Import the GitHub repo. Vite is detected automatically. `vercel.json` handles page refreshes.

**GitHub Pages:** works, but it has no rewrite rules. Change `BrowserRouter` to `HashRouter` in `src/main.jsx`, set `base: "/<repo-name>/"` in `vite.config.js`, then deploy `dist/` (for example with the `gh-pages` package).

## 4. Custom domain and SSL
1. Buy a domain (for example `varshajadhav.dev`).
2. Netlify: Domain management > Add custom domain. Vercel: Settings > Domains.
3. At your registrar, add the DNS records the host shows you (an `A` record or `ALIAS` for the root domain, a `CNAME` for `www`).
4. Wait for DNS to propagate (minutes to a few hours). Netlify, Vercel and GitHub Pages then issue a free Let's Encrypt SSL certificate automatically. Turn on "Force HTTPS".

## 5. Test the live site
- **Browsers:** Chrome, Firefox, Safari and Edge. Use BrowserStack's free trial or LambdaTest if you don't have all of them.
- **Responsiveness:** DevTools device toolbar at 360px, 768px and 1280px, plus a real phone. Check the mobile menu opens and closes.
- **Checks:** all links work, the PDF downloads, images load, no console errors, padlock shows in the address bar.

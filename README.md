# Draxion Studios

React site for [draxionstudios.dev](https://draxionstudios.dev).

GitHub Actions builds `Homepage/` and deploys the static output to GitHub Pages. You do not commit a production build.

## Develop

```bash
cd Homepage
npm install
npm run dev
```

## Deploy

Push to `main` (or run the **Deploy GitHub Pages** workflow from the Actions tab).

In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
Keep the custom domain `draxionstudios.dev`. Porkbun DNS can stay as it is.

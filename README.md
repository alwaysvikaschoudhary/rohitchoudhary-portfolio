# Rohit Choudhary — Portfolio (AI-powered)

A personal portfolio web app built with React + TypeScript and Vite. This project includes integration with Google's GenAI (Gemini) via the @google/genai package to power AI features. Use this repository to run and develop the site locally or deploy it to a hosting provider.

View the live AI Studio app (if available): https://ai.studio/apps/d788b996-15ec-45d2-8c35-173439217911

## Tech stack

- React 19 + TypeScript
- Vite (dev server & build)
- Tailwind CSS
- @google/genai (Gemini integration)
- Express (light server or API endpoints)
- Node.js / npm

## Prerequisites

- Node.js (recommend >= 18)
- npm
- A Gemini API key (set as GEMINI_API_KEY) if you plan to run or test AI features

## Setup

1. Clone the repository
   - git clone https://github.com/alwaysvikaschoudhary/rohitchoudhary-portfolio.git
   - cd rohitchoudhary-portfolio

2. Install dependencies:
   - npm install

3. Create an environment file at the project root named `.env.local` and add your Gemini API key:

   ```bash
   # .env.local
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Notes:
   - The project uses dotenv; ensure `.env.local` is present for local runs.
   - Keep secrets out of version control. Do not commit `.env.local`.

## Available scripts

- npm run dev
  - Starts the Vite dev server on port 3000 (host 0.0.0.0).
  - Usage: npm run dev

- npm run build
  - Builds the production assets with Vite.
  - Usage: npm run build

- npm run preview
  - Locally preview the production build.
  - Usage: npm run preview

- npm run clean
  - Removes `dist` and `server.js` (if present).
  - Usage: npm run clean

- npm run lint
  - Runs TypeScript type checking: `tsc --noEmit`
  - Usage: npm run lint

These commands match the scripts defined in package.json.

## Running locally

1. Ensure `.env.local` is configured with GEMINI_API_KEY (see above).
2. Start development server:
   - npm run dev
3. Open http://localhost:3000 in your browser.

If port 3000 is in use, either stop the process using it or change the dev script to use a different port.

## Build & Preview

- Build production bundle:
  - npm run build
- Preview production build locally:
  - npm run preview

## Deployment

You can deploy the built site to Vercel, Netlify, or any static host that supports a Vite build. If the app uses Express API endpoints (server-side), deploy the server component to a Node-capable host (Vercel Serverless Functions, Render, etc.) or adapt to your hosting choices.

Quick Vercel steps:
1. Push the repository to GitHub.
2. In Vercel, import the repository.
3. Set Environment Variable:
   - GEMINI_API_KEY = your_gemini_api_key
4. Build & Output Settings:
   - Build Command: npm run build
   - Output Directory: dist
5. Deploy.

Secure your Gemini API key by storing it in your host's environment variables (never commit it).

## AI / Gemini notes

- The project depends on @google/genai for using Gemini models; make sure you have the appropriate access and quota.
- Keep GEMINI_API_KEY private. Monitor usage and billing on your Google Cloud / Gemini account.
- If you need to test AI features without invoking real API calls, consider mocking network calls or using a small local stub for development.

## Troubleshooting

- If the dev server fails to start:
  - Confirm Node.js and npm versions.
  - Check that `.env.local` exists and has valid syntax (no stray quotes).
  - Run `npm run lint` to see TypeScript issues.

- If Gemini calls fail:
  - Verify GEMINI_API_KEY is correct and has required permissions.
  - Confirm network access and any firewall restrictions.

## Contributing

Contributions are welcome. Common tasks:
- Fix bugs or style issues
- Improve accessibility and responsiveness
- Add new portfolio projects or update content

Please open issues or PRs for changes.

## License

Specify your license here (e.g., MIT). If none, add a LICENSE file.

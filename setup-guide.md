# Futures Journal - Setup Guide (non-technical)

This guide walks you through:
- Wiring Sanity content
- Pushing code to GitHub
- Deploying to Vercel

## 1) Sanity Studio
1. Go to https://studio.sanity.io and open your project (Project ID: xwb15wfq).
2. In the Studio's schemas folder, add the files from `/sanity/schemas` and deploy your studio.
3. In the studio, create and publish:
   - Strategies:
     - Breakout Strategy (sample description)
     - Mean Reversion
     - Trend Continuation
     - Range Scalping
   - Site settings:
     - Site Title: Futures Journal
     - Welcome Message: Write your goals and reflections here.

## 2) GitHub
1. Create a new repository (e.g., `futures-journal`).
2. Upload the project files (you can drag-and-drop the ZIP contents in the GitHub web UI).
3. Commit and push.

## 3) Vercel
1. Sign in to Vercel and Import Project from GitHub.
2. Set Environment Variables:
   - `VITE_SANITY_PROJECT_ID` = xwb15wfq
   - `VITE_SANITY_DATASET` = production
3. Deploy. Vercel detects Vite and will build automatically.

## 4) After Deploy
- Visit your live site at `<your-project>.vercel.app`.
- Sanity content you published will appear in the Strategy Analysis and Goals pages.
- Your local trades remain private in your browser.


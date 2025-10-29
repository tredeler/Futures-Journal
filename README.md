# Futures Journal v1

A ready-to-deploy React + Vite + Tailwind trading journal app.
This package includes:
- Frontend React app (local journal storage)
- Strategy & site settings integration via Sanity (public read)
- Sanity schema files for `strategy` and `siteSettings`
- Simple dark/light theme support (default: **dark**)
- Recharts for strategy visualization

**Sanity Project ID used in client default:** xwb15wfq

## Quick start (non-technical)

1. Install dependencies:
   - Run `npm install` in the project root.

2. Local development:
   - Run `npm run dev` and open http://localhost:5173

3. Sanity
   - Open your Sanity project dashboard (https://www.sanity.io/manage).
   - In your Studio, add the `strategy` and `siteSettings` schemas (from the /sanity/schemas folder).
   - Create and publish some strategy documents (Breakout, Mean Reversion, Trend Continuation, Range Scalping) and a Site settings doc.

4. Deployment to Vercel (no coding required)
   - Create a GitHub repo and push this project (you can upload the ZIP to GitHub).
   - In Vercel, Import Project → Connect your GitHub repo.
   - Add Environment Variables in Vercel:
     - `VITE_SANITY_PROJECT_ID` = xwb15wfq
     - `VITE_SANITY_DATASET` = production
   - Deploy. The app will fetch strategies from Sanity and display them.

## Notes & future steps
- Trades are stored in the browser via `localStorage` (private).
- The codebase includes an `AuthContext` placeholder to make adding login later straightforward.
- When you're ready to enable per-user journals, we recommend Supabase or Clerk for auth + a per-user data store.


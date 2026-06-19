# Mert Assistant — Cloudflare Worker

A tiny proxy that powers the "Ask me" assistant on the portfolio. It holds the
Gemini API key as a secret and answers questions grounded in Mert's CV.

The site works **without** this worker (it falls back to built-in static answers).
Deploy this to upgrade the assistant to a real Gemini-powered chat.

## One-time setup (~10 min, all free)

### 1. Get a free Gemini API key
- Go to https://aistudio.google.com/apikey
- "Create API key" → copy it.

### 2. Install Wrangler (Cloudflare CLI)
```bash
npm install -g wrangler
wrangler login        # opens browser, sign in / create a free Cloudflare account
```

### 3. Deploy the worker
```bash
cd worker
wrangler deploy
```
This prints your worker URL, e.g. `https://mert-assistant.<your-subdomain>.workers.dev`

### 4. Add the Gemini key as a secret
```bash
wrangler secret put GEMINI_API_KEY
# paste the key from step 1 when prompted
```

### 5. Point the site at the worker
Open `src/lib/assistant.ts` and set:
```ts
export const ASSISTANT_ENDPOINT = 'https://mert-assistant.<your-subdomain>.workers.dev'
```
Commit & push — GitHub Pages rebuilds and the assistant goes live.

## Notes
- **Cost:** Gemini Flash free tier + Cloudflare Workers free tier (100k req/day).
  If the daily limit is hit, the assistant gracefully falls back to static answers.
- **CORS:** allowed origins are in `wrangler.toml` (`ALLOWED_ORIGINS`). Add your
  custom domain there if you set one up, then `wrangler deploy` again.
- **Model:** `GEMINI_MODEL` in `wrangler.toml` (default `gemini-2.0-flash`).
- **Update the CV:** edit `CV_CONTEXT` in `src/index.js`, then `wrangler deploy`.
- **Test locally:** `wrangler dev` (set a local secret with a `.dev.vars` file containing `GEMINI_API_KEY=...`).

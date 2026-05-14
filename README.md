# Echo Landing Page

React + TypeScript landing page for Echo, built for the Gemma 4 Good Hackathon. The site presents Echo as a local-first safety assistant that turns a distress signal into a coordinated response flow.

## Current Product Story

Echo's reliable submission path is the Flutter Chrome demo:

- Voice SOS or typed fallback captures the user's request.
- Gemma runs through a local `llama.cpp` server for safety reasoning.
- The emergency flow escalates through Tier 1, Tier 2, and the Echo Feed.
- Optional local bridges add ElevenLabs speech and Telegram contact replies.
- The APK/model download path is prepared for teammate testing, but on-device Gemma inference is future validation work.

The landing page should describe this as a working local-first demo with an on-device path prepared, not as a fully proven offline mobile runtime.

## Run Locally

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run type-check
npm run build
```

## Optional Firebase Comments

The community comment widget can use Firebase when configured. Keep secrets local and do not commit `.env` files.

If Firebase is not configured, the page falls back to demo comments.

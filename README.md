# NovRow 🚣 — Beginner Rowing Learning App

A simple React app that teaches beginners how to row. Rebuilt to match the
original student-project look (navy + white, serif headings, periwinkle buttons).

## How to run

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Flow

1. **Login / Sign up** — mock auth, you can type *anything* and it logs you in.
2. **Email verification** — 3-step demo (enter email → code → done).
3. **Onboarding** — "What brings you to this app?"
4. **Home** — three boats = three difficulties (Novice, Mediocre, Advanced).
   Advanced is "Coming Soon / Locked".
5. **Difficulty screen** — the boat with 8 oars (Level 1–8). Finish a level to
   unlock the next one.
6. **Level** — watch the video, then press **Next**.
7. **Quiz** — answer the questions to pass and earn the level badge.
8. **Profile** — name, email, and the Badge Wall (badges light up as you pass levels).

## Where to edit things

- Lesson text & quiz questions: `src/data/lessons.js`
- Colors, fonts, spacing: `src/styles.css` (see the `:root` variables at top)
- Each screen: `src/screens/`
- Boat & oar images: `public/boat.png`, `public/oar.png`

The real video files aren't included — "Click here to view video" is a
placeholder you can wire up to your own videos later.

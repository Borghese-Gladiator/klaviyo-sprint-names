# Klaviyo Sprint Names
Quick website I built after a short conversation at work about showing the interesting words we picked for sprints with their definitions.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Run Locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Implementation Steps
- `npx create-next-app@latest .` -> Page Router, no TS, no ESLint
- fix: `jsconfig.json` - support for imports
- implement MVP w/ Chakra UI
  - `_app.js` - `ChakraProvider`
  - `index.js`
    - navbar - FAB (floating action button)
      - `npm i lucide-react`
    - `SprintTable.jsx`
    - `SprintList.jsx`
  - `api/words.js` - JS Constant built by scraping sprint names (copy-pasted HTML and extracted w/ ChatGPT)
- generated constants via ChatGPT and saved into words
  - `Given this following code snippet, add items to the array using the topic list. Ensure the dates are 2 weeks apart like in the first example.`...etc.

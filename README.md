This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After cloning the repo, run:

```bash
npm install
```

to install dependencies. Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

By default, your server will make requests directly to 17Lands. You can optionally speed up development by using a Redis instance to cache results. Once you've set up your Redis instance, add the following line to `.env.local`:

```
REDIS_URL=<your Redis connection URL>
```

## Instructions for adding a new set

1. Add the new set to the `MagicSet` enum
2. Update the value of the `LATEST_SET` constant in `lib/constants.ts`
3. Once Scryfall is updated, download the Oracle Cards data file [here](https://scryfall.com/docs/api/bulk-data) and update `data/oracle-cards.json` in the repo
4. Update the root redirect in `next.config.js` to redirect to the latest set
5. Optionally, update Keyrune with `npm update keyrune` to pull in the latest set icons
6. Push to GitHub

# To Do

- Search feature?
- Improvements to card detail view?
- Add delay to card previews?
- Improve filter button styling?
- Fix last updated at timestamp?

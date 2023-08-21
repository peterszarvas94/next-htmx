# HTMX over Next.js

This is a proof of concept (todo app), there are better ways to serve [HTMX](https://htmx.org/)

## How it works

- initial page is rendered by Next.js, with [Tailwind](https://tailwindcss.com/) css
- HTMX Ajax requests are received via [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- React Server components are converted to HTML string via `renderToString()` function in `react-dom/server`
- HTXM receives new HTML string and updates the dom
- [Turso](https://turso.tech/) database
- [drizzle](https://orm.drizzle.team/) ORM

## Commands

- `gen`: generate schema migation
- `push`: push migration
- `drop`: drop migartion
- `studio`: start Drizzle Studio

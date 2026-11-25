# 1. Use Vite instead of Next.js

Date: 2026-11-24
Status: Accepted

## Context

I have created apps before, but they have only been web apps built with Next.js.
Chisel will be a mobile app, which is something I have not built before.

After more research, I learned that Chisel will use Capacitor, which packages
the app as plain static files inside the phone. There is no server on a phone,
so Next.js features like server-side rendering, API routes, and server actions
can't be used. I would have to turn most of Next.js off.

## Decision

I decided to use Vite with React and TypeScript to build Chisel as a
single-page app.

## Consequences

Good:

- Vite builds plain static files, which is exactly what Capacitor needs.
- The setup is simpler, since there are no server features to turn off.
- Vitest is made by the same team, so testing works with no extra setup.

Trade-offs:

- Vite doesn't include routing, so I will need to add React Router for pages.
- If Chisel needs server code later (like syncing data), it will be a separate
  backend API instead of being built into the app.

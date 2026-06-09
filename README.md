# art-gallery-ecommerce
An E-Commerce app buld with Next.js (App Router), TypeScript, Tailwind CSS, Node.js (NestJS), PostgreSQL, and Redis

### Web app
```
pnpm --filter @alignartistry/web dev
```

### Auth service (needs PostgreSQL running)
```
pnpm --filter @alignartistry/auth-service dev
```

### Both together
```
pnpm --filter @alignartistry/ui build
pnpm dev
```

### Removes the .next build cache.
- npm run clean



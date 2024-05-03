FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY=6Ler9s4pAAAAAIEHFDSmgWfnzDi48XAK4gl2azcL
ENV NEXT_PUBLIC_API_KEY=AIzaSyAqCKpWJlnPrhsiDcgqe02CRThZ9JGBhaM
ENV NEXT_PUBLIC_AUTHDOMAIN=causal-setting-417421.firebaseapp.com
ENV NEXT_PUBLIC_PROJECTID=causal-setting-417421
ENV NEXT_PUBLIC_STORAGEBUCKET=causal-setting-417421.appspot.com
ENV NEXT_PUBLIC_MESSAGINGSENDERID=218920345662
ENV NEXT_PUBLIC_APPID=1:218920345662:web:14950b6a3cb6fde446f16f

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
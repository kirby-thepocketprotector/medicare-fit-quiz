# Medicare Fit Quiz — Multi-stage Dockerfile for Cloud Run
# Next.js 15 / React 19 / Standalone output

# =============================================================================
# Stage 1: Builder
# =============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# ---------------------------------------------------------------------------
# NEXT_PUBLIC_* variables MUST be available at build time.
# Next.js inlines these into the client-side JavaScript bundle during
# `npm run build`. They CANNOT be set as runtime environment variables.
# Pass them via --build-arg during `docker build`.
# ---------------------------------------------------------------------------
ARG NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT
ARG NEXT_PUBLIC_XANO_LEAD_ENDPOINT
ARG NEXT_PUBLIC_XANO_HUBSPOT_ENDPOINT
ARG NEXT_PUBLIC_XANO_HUBSPOT_UPDATE_ENDPOINT

ENV NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT=${NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT}
ENV NEXT_PUBLIC_XANO_LEAD_ENDPOINT=${NEXT_PUBLIC_XANO_LEAD_ENDPOINT}
ENV NEXT_PUBLIC_XANO_HUBSPOT_ENDPOINT=${NEXT_PUBLIC_XANO_HUBSPOT_ENDPOINT}
ENV NEXT_PUBLIC_XANO_HUBSPOT_UPDATE_ENDPOINT=${NEXT_PUBLIC_XANO_HUBSPOT_UPDATE_ENDPOINT}

# Build the Next.js application (standalone output)
RUN npm run build

# =============================================================================
# Stage 2: Runner (production)
# =============================================================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone server output
COPY --from=builder /app/.next/standalone ./

# Copy static assets into the standalone directory
# (standalone output does not include these automatically)
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]

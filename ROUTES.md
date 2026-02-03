# Medicare Fit Quiz - Route Map

All routes are served under the `/app` basePath.

## Main Routes

### Homepage
- **URL**: http://localhost:3000/app
- **Description**: Landing page with "Start Quiz" button

### Quiz Flow

#### Start
- **URL**: http://localhost:3000/app/ntm-quiz-2026-v1/splash
- **Description**: Quiz introduction page

#### Questions (Q01-Q05c)
- http://localhost:3000/app/ntm-quiz-2026-v1/q01 - Birth date selection
- http://localhost:3000/app/ntm-quiz-2026-v1/q01a - IEP enrollment window info
- http://localhost:3000/app/ntm-quiz-2026-v1/q02 - Medicare Part A/B enrollment
- http://localhost:3000/app/ntm-quiz-2026-v1/q02a - Current coverage type
- http://localhost:3000/app/ntm-quiz-2026-v1/q03 - Veteran status
- http://localhost:3000/app/ntm-quiz-2026-v1/q03a - VA healthcare usage
- http://localhost:3000/app/ntm-quiz-2026-v1/q03b - VA preferences
- http://localhost:3000/app/ntm-quiz-2026-v1/q04 - Medicaid eligibility
- http://localhost:3000/app/ntm-quiz-2026-v1/q05 - Sam vs Alex intro
- http://localhost:3000/app/ntm-quiz-2026-v1/q05a - Sam's story (Medicare Advantage)
- http://localhost:3000/app/ntm-quiz-2026-v1/q05b - Alex's story (Medigap)
- http://localhost:3000/app/ntm-quiz-2026-v1/q05c - Final budget choice

#### Results (Dynamic)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R01 - Medicare Advantage (lower cost)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R02 - Medigap (flexible budget)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R03 - Dual-Eligible (Medicaid)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R04 - VA-Friendly MA
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R05 - Medigap for Veterans
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R06 - VA-Friendly MA (non-VA user)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R07 - Medigap for Veterans (non-VA)
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R08 - Already has Medicare Advantage
- http://localhost:3000/app/ntm-quiz-2026-v1/result/R09 - Already has Medigap

## Navigation

All internal links use Next.js routing and automatically include the `/app` basePath:
- Homepage button links to `/ntm-quiz-2026-v1/splash` → resolves to `/app/ntm-quiz-2026-v1/splash`
- Quiz navigation uses router.push with absolute paths
- Back button uses router.back() to maintain basePath

## Configuration

The basePath is configured in `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  basePath: "/app",
};
```

This means:
- ✅ All pages are served under `/app/*`
- ✅ Assets are automatically prefixed
- ✅ Links and routing automatically handle the prefix
- ✅ Quiz paths use `/ntm-quiz-2026-v1/*` for version tracking

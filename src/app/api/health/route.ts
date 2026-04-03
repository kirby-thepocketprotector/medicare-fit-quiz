/**
 * Health Check API Route — Medicare Fit Quiz
 *
 * Place this file at: src/app/api/health/route.ts
 *
 * With basePath: '/app' in next.config.ts, this endpoint will be
 * accessible at: /app/api/health
 *
 * Returns 200 OK with a JSON body for Cloud Run health checks
 * and monitoring.
 */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "medicare-fit-quiz",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

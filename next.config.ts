import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  async rewrites() {
    return [
      // Clean URLs (without .html extension)
      {
        source: '/client-success-stories',
        destination: '/tools/client-success-stories.html',
      },
      {
        source: '/deadline-reminder-tool',
        destination: '/tools/deadline-reminder-tool.html',
      },
      {
        source: '/match-an-advisor',
        destination: '/tools/match-an-advisor.html',
      },
      {
        source: '/path-finder',
        destination: '/tools/path-finder.html',
      },
      // Support /tools/ paths without .html extension
      {
        source: '/tools/client-success-stories',
        destination: '/tools/client-success-stories.html',
      },
      {
        source: '/tools/deadline-reminder-tool',
        destination: '/tools/deadline-reminder-tool.html',
      },
      {
        source: '/tools/match-an-advisor',
        destination: '/tools/match-an-advisor.html',
      },
      {
        source: '/tools/path-finder',
        destination: '/tools/path-finder.html',
      },
    ];
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

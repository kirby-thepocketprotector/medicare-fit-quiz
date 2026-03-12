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
        source: '/tools/deadline-reminder-tool-christopher-o-kieffe',
        destination: '/tools/deadline-reminder-tool-christopher-o-kieffe.html',
      },
      {
        source: '/tools/deadline-reminder-tool-scott-martin',
        destination: '/tools/deadline-reminder-tool-scott-martin.html',
      },
      {
        source: '/tools/deadline-reminder-tool-megan-lengerich',
        destination: '/tools/deadline-reminder-tool-megan-lengerich.html',
      },
      {
        source: '/tools/deadline-reminder-tool-michael-boshardy',
        destination: '/tools/deadline-reminder-tool-michael-boshardy.html',
      },
      {
        source: '/tools/deadline-reminder-tool-diy',
        destination: '/tools/deadline-reminder-tool-diy.html',
      },
      {
        source: '/tools/doctor-network-monitor-diy',
        destination: '/tools/doctor-network-monitor-diy.html',
      },
      {
        source: '/tools/doctor-network-monitor-christopher-o-kieffe',
        destination: '/tools/doctor-network-monitor-christopher-o-kieffe.html',
      },
      {
        source: '/tools/doctor-network-monitor-scott-martin',
        destination: '/tools/doctor-network-monitor-scott-martin.html',
      },
      {
        source: '/tools/doctor-network-monitor-megan-lengerich',
        destination: '/tools/doctor-network-monitor-megan-lengerich.html',
      },
      {
        source: '/tools/doctor-network-monitor-michael-boshardy',
        destination: '/tools/doctor-network-monitor-michael-boshardy.html',
      },
      {
        source: '/tools/match-an-advisor',
        destination: '/tools/match-an-advisor.html',
      },
      {
        source: '/tools/path-finder',
        destination: '/tools/path-finder.html',
      },
      {
        source: '/tools/matchmaker-v1',
        destination: '/tools/matchmaker-v1.html',
      },
      {
        source: '/tools/matchmaker-v2',
        destination: '/tools/matchmaker-v2.html',
      },
      // NTM Quiz v3 leadform
      {
        source: '/ntm-quiz-2026-v3-leadform',
        destination: '/ntm-quiz-2026-v3-leadform.html',
      },
      // NTM Quiz v4 leadform
      {
        source: '/ntm-quiz-2026-v4-leadform',
        destination: '/ntm-quiz-2026-v4-leadform.html',
      },
      // Advisor pages
      {
        source: '/advisors/scott-martin',
        destination: '/advisors/scott-martin.html',
      },
      {
        source: '/advisors/mike-boshardy',
        destination: '/advisors/mike-boshardy.html',
      },
      {
        source: '/advisors/megan-lengerich',
        destination: '/advisors/megan-lengerich.html',
      },
      {
        source: '/advisors/chris-okieffe',
        destination: '/advisors/chris-okieffe.html',
      },
    ];
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

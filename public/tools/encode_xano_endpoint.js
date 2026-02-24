#!/usr/bin/env node

// =================================================================
// XANO ENDPOINT ENCODER
// =================================================================
// This script helps you encode your actual Xano endpoint URL
// for use in the secured match-an-advisor.html file
//
// USAGE:
//   node encode_xano_endpoint.js "https://your-actual-endpoint.xano.io/api:group/matchmaker_submit"
//
// =================================================================

const fullEndpoint = process.argv[2];

if (!fullEndpoint) {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  XANO ENDPOINT ENCODER                                         ║
╚═══════════════════════════════════════════════════════════════╝

USAGE:
  node encode_xano_endpoint.js "YOUR_ACTUAL_XANO_URL"

EXAMPLE:
  node encode_xano_endpoint.js "https://x8ab-your-workspace.xano.io/api:12345678/matchmaker_submit"

  `);
  process.exit(1);
}

// Find a good split point (after domain, before path)
const urlParts = fullEndpoint.match(/^(https:\/\/[^/]+\.xano)(\..+)$/);

if (!urlParts) {
  console.error('Error: Invalid Xano URL format');
  console.error('Expected format: https://INSTANCE.xano.io/api:GROUP/endpoint');
  process.exit(1);
}

const part1 = urlParts[1]; // e.g., "https://x8ab-workspace.xano"
const part2 = urlParts[2]; // e.g., ".io/api:12345678/matchmaker_submit"

// Encode both parts
const encoded_p1 = Buffer.from(part1).toString('base64');
const encoded_p2 = Buffer.from(part2).toString('base64');

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  ENCODED ENDPOINT PARTS                                        ║
╚═══════════════════════════════════════════════════════════════╝

Original URL: ${fullEndpoint}

Split into:
  Part 1: ${part1}
  Part 2: ${part2}

╔═══════════════════════════════════════════════════════════════╗
║  COPY THESE VALUES TO YOUR XANO_CONFIG:                       ║
╚═══════════════════════════════════════════════════════════════╝

_p1: atob('${encoded_p1}'),
_p2: atob('${encoded_p2}'),

`);

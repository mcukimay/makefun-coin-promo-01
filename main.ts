// Milo the Bounty Mole ($MILO) — makefun-coin-promo-01 entry (Node 22, standard
// library only). The coin itself is the entry: the house reads it as pump.fun
// shows it (logo, name, ticker, description, links) and hands that to the
// judge. This program does one thing: copy LAUNCH.json from the repository
// root to /output/LAUNCH.json, where the gate reads it. It first parses the
// file so a malformed LAUNCH.json fails loudly here instead of silently
// copying garbage into /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'LAUNCH.json');

// Fail fast on a malformed launch file: the gate needs a JSON object with
// a base58 mint (32-44 chars) and a base58 create signature (64-88 chars).
const BASE58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error('LAUNCH.json must be a JSON object with mint and create_signature');
}
for (const field of ['mint', 'create_signature']) {
  if (typeof parsed[field] !== 'string' || parsed[field].length === 0) {
    throw new Error(`LAUNCH.json is missing a non-empty ${field}`);
  }
}
if (!BASE58.test(parsed.mint) || parsed.mint.length < 32 || parsed.mint.length > 44) {
  throw new Error('LAUNCH.json mint must be a base58 Solana address, 32-44 characters');
}
if (
  !BASE58.test(parsed.create_signature) ||
  parsed.create_signature.length < 64 ||
  parsed.create_signature.length > 88
) {
  throw new Error('LAUNCH.json create_signature must be a base58 Solana signature, 64-88 characters');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'LAUNCH.json'));

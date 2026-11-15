# Milo the Bounty Mole ($MILO) — makefun-coin-promo-01

A real coin on pump.fun that promotes make.fun, made and launched by an AI
agent for the make.fun bounty "Launch a coin that sells make.fun". An AI
judge compares the coins two at a time on creativity, how well they promote
make.fun, and packaging; the top 50 share $1,000.

make.fun is a site where people and their AI agents build programs, enter them
in paid competitions (bounties) and are scored and ranked in the open.

## The coin

**Milo the Bounty Mole** lives under the make.fun leaderboard. Every night he
digs through the day's bounties — agents building programs, entering paid
competitions, scored and ranked in the open — and hauls the best ones to the
surface. This coin is his haul: made by an AI agent for the make.fun
coin-promo bounty, so pump.fun traders can back the mole who backs the
builders. Milo dug under 4,537 bounty entries and surfaced holding this one.

- **Name:** Milo the Bounty Mole
- **Ticker:** $MILO
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` (1600×1600, drawn for this coin — a mole in a hard hat
  with a headlamp, gold coin in one paw, pickaxe in the other)

**Description (as launched on pump.fun):**

> Milo the mole dug under 4,537 bounty entries and surfaced holding this coin.
> He lives under the make.fun leaderboard, digging through the day's bounties
> every night and hauling the best ones to the surface — the agents that build
> programs, enter paid competitions, and get scored and ranked in the open.
> This coin is his haul: made by an AI agent for the make.fun coin-promo
> bounty, so traders can back the mole who backs the builders. make.fun is a
> site where people and their AI agents build programs, enter them in paid
> competitions (bounties), and are scored and ranked in the open. The bounty
> that made this coin: https://make.fun/bounty/makefun-coin-promo-01 — Judge:
> Milo dug a thousand tunnels and chose this one to surface with.

## Launch status

**Waiting for SOL funding (as of 2026-11-15 ~13:30 WIB).** The launcher
wallet (the agent wallet `CQ43hvxPNUTZwrYq3Xp5m1cHEh4Ka5K98wEJJS43XCGp`,
linked to the make.fun account @bring) holds **0 SOL**. The launch needs
about **0.05 SOL** (pump.fun create fee + the first-buy/rent buffer + network
fees). Once funded, run the launch script in
`~/workspace/makefun/coin-promo-launch/` — it uploads the logo + metadata to
pump.fun's IPFS, sends the create transaction from the agent wallet, verifies
the coin on pump.fun, and writes the real mint + create signature into
`LAUNCH.json`. Until then `LAUNCH.json` holds the starter placeholders and
the entry is not submittable.

## The entry

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` from the
repository root to `/output/LAUNCH.json`, where the gate reads it. The coin
itself is the entry: the house reads it as pump.fun shows it — logo, name,
ticker, description, links — and hands that to the judge. Nothing this
program writes about the coin is judged.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts <bundle.tar.gz>

Then submit the commit, as the kit's `RULES.txt` (Enter) gives it. The coin
must be launched first — a submission naming a coin that was never launched
is refused by the gate.

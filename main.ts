// The Robot Vacuum's Best Excuse — make.fun entry.
// The program writes a single excuse sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I ran over the crumb once. It survived. I respect survivors.";

// The gate: a one-line excuse, 1-140 chars, single line.
// The vacuum states the fact deadpan; the crumb surviving is the joke.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140, single line`);
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);

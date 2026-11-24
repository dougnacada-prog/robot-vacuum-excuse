// The Robot Vacuum's Best Excuse — make.fun entry.
// The program writes a single excuse sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I ran over the crumb once. It survived. I respect survivors.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge hums at 2 a.m. like it's gossiping about me, then judges my midnight snack with a light that turns on just to watch.";
const CAP = 200;

if (ROAST.length < 1 || ROAST.length > CAP) {
  throw new Error(`roast must be 1..${CAP} chars, got ${ROAST.length}`);
}
if (ROAST.includes("\n") || ROAST.trim() !== ROAST) {
  throw new Error("roast must be a single line with no leading/trailing space");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`roast written: ${ROAST.length} chars`);

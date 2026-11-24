// One Sentence for a Traveler from 1800.
//
// The entry is a single sentence of at most 200 characters that explains
// the modern internet to someone who has just stepped out of the year 1800.
// It builds only from things a person from 1800 already knows — a road, a
// post office, a library, a market — and leaves one picture behind:
// every library, post office and market in the world joined by one road.
// The word "internet" appears once, only as the name of the thing being
// explained; every other word is one the traveler would already know.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The internet is every library, post office and market in the world " +
  "joined by a single road, where a letter arrives the moment it is " +
  "written and any book can be read from your chair.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\s{2,}/.test(ENTRY)) {
  throw new Error("entry must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);

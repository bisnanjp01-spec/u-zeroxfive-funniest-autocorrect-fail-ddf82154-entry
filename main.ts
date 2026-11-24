// Funniest Autocorrect Fail — make.fun entry.
//
// The program writes one autocorrect-fail line (under 200 characters)
// to /output/entry.txt, where the house judge reads it. The line is a
// single text message, 138 characters: "the wifi is down" slips to
// "the wife is down", and the boss's polite reply lands the joke on
// first read. One clear wrong word, one line, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I texted my boss 'working from home today, the wifi is down' — autocorrect sent 'the wife is down' and he replied 'hope she feels better.'";

if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

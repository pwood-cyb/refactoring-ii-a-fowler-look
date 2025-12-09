import { readFile } from "node:fs/promises";
import { statement } from "./statement.js";

async function loadJson(relativePath) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const contents = await readFile(fileUrl, "utf-8");
  return JSON.parse(contents);
}

export async function main() {
  const [plays, invoices] = await Promise.all([
    loadJson("./plays.json"),
    loadJson("./invoices.json"),
  ]);

  for (const invoice of invoices) {
    const result = statement(invoice, plays);
    console.log(result);
  }
}

main();

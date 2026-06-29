import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const packagePath = path.join(root, "package.json");
const packageJson = JSON.parse(await readFile(packagePath, "utf8"));

for (const theme of packageJson.contributes?.themes ?? []) {
  const themePath = path.join(root, theme.path);
  const themeJson = JSON.parse(await readFile(themePath, "utf8"));

  if (!themeJson.name || !themeJson.colors || !Array.isArray(themeJson.tokenColors)) {
    throw new Error(`${theme.path} is missing required theme fields.`);
  }

  console.log(`Validated ${theme.label}: ${theme.path}`);
}

/**
 * Vercel espera output en public/. La fuente sigue siendo /index.html (GitHub Pages).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "index.html");
const outDir = path.join(root, "public");
const dest = path.join(outDir, "index.html");

if (!fs.existsSync(src)) {
  console.error("copy-to-public: no existe index.html en la raíz del repo");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("copy-to-public: index.html → public/index.html");

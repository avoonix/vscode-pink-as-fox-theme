import * as fs from "fs";

// util

const read = (path) =>
  fs.readFileSync(path, {
    encoding: "utf8",
  });

const readJson = (path) => JSON.parse(read(path));

const write = (path, content) =>
  fs.writeFileSync(path, content, {
    encoding: "utf8",
  });

const writeJson = (path, obj) => write(path, JSON.stringify(obj, null, 2));

const relativePath = (p) => new URL (p, import.meta.url);

// /util

const theme = readJson(relativePath("base.json"));
writeJson(relativePath("../themes/pink-as-fox-variant-1-color-theme.json"), theme);

const blackSidebar = readJson(relativePath("blacker.json"));
Object.assign(theme.colors, blackSidebar.colors)
writeJson(relativePath("../themes/pink-as-fox-variant-2-color-theme.json"), theme);

const blacker = readJson(relativePath("blackest.json"));
Object.assign(theme.colors, blacker.colors)
writeJson(relativePath("../themes/pink-as-fox-variant-3-color-theme.json"), theme);

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

// black
const theme = readJson(relativePath("base.json"));
writeJson(relativePath("../themes/pink-as-fox-black-color-theme.json"), theme);
// /black

// blacker
const blacker = readJson(relativePath("blacker.json"));
Object.assign(theme.colors, blacker.colors)
writeJson(relativePath("../themes/pink-as-fox-blacker-color-theme.json"), theme);
// /blacker

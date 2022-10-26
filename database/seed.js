import { readFileSync } from "node:fs";
import { join } from "node:path";
import db from "./db.js";

const seedPath = join("database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);

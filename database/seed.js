import { readFileSync } from "node:fs";
import { join } from "node:path";
import db from "./db.js";
import books from "./mockData.js"
import { insertBook } from "./model.js";

const seedPath = join("database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");

books.forEach((book) => insertBook(book))



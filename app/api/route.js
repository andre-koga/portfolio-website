import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, context) {
  if (!db) {
    db = await open({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const tables = await db.all(
    "SELECT name FROM sqlite_master WHERE type='table'",
  );

  const allData = {};
  for (let table of tables) {
    allData[table.name] = await db.all(`SELECT * FROM ${table.name}`);
  }

  return new Response(JSON.stringify(allData), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    status: 200,
  });
}

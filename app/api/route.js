import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  // Perform a database query to retrieve all tables from the database
  const tables = await db.all(
    "SELECT name FROM sqlite_master WHERE type='table'",
  );

  // Perform a database query to retrieve all items from each table
  const allData = {};
  for (let table of tables) {
    allData[table.name] = await db.all(`SELECT * FROM ${table.name}`);
  }

  return new Response(JSON.stringify(allData), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

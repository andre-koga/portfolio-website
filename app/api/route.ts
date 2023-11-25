import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { NextPageContext } from "next";

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(req: Request, context: NextPageContext) {
  if (!db) {
    db = await open<sqlite3.Database>({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const tables = await db.all(
    "SELECT name FROM sqlite_master WHERE type='table'",
  );

  const allData: { [key: string]: any[] } = {};
  for (let table of tables) {
    allData[table.name] = await db.all(`SELECT * FROM ${table.name}`);
  }

  return new Response(JSON.stringify(allData), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

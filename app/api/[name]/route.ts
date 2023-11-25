import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(
  req: Request,
  { params }: { params: { name: string } },
) {
  if (!db) {
    db = await open({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const item = await db.all(`SELECT * FROM ${params.name}`);

  return new Response(JSON.stringify(item), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

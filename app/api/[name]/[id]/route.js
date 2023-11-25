import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, context) {
  const id = context.params.id;
  const name = context.params.name;

  if (!db) {
    db = await open({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const item = await db.get(`SELECT * FROM ${name} WHERE id = ?`, id);

  return new Response(JSON.stringify(item), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    status: 200,
  });
}

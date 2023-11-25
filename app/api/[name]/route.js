import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, context) {
  const name = context.params.name;

  if (!db) {
    db = await open({
      filename: "db/db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  try {
    const item = await db.all(`SELECT * FROM ${name}`);
    return new Response(JSON.stringify(item), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 200,
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

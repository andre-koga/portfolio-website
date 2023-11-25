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

  try {
    const item = await db.all(`SELECT * FROM footer_facts`);
    return new Response(JSON.stringify(item), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      status: 200,
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

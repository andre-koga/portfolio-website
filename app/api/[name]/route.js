import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function GET(req, res) {
  // Extract the "id" from the URL by splitting the URL and taking the last element
  const name = req.url.split("/").pop();

  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./db/db.sqlite3", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve an item based on the id
  const item = await db.all(`SELECT * FROM ${name}`);

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(item), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

const sqlite3 = require("sqlite3").verbose();

const table_name = process.argv[2];

// Open the database
let db = new sqlite3.Database(
  "./db.sqlite3",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  },
);

db.run(`DROP TABLE IF EXISTS ${table_name}`, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Table ${table_name} deleted successfully`);
});

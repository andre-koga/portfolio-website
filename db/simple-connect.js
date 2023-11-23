const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

//
const json_file = process.argv[2];

// Read and parse the JSON file
const data = JSON.parse(fs.readFileSync(json_file, "utf8"));
const table_name = data.table_name;
const columns = data.columns;
//

const columns_names = columns.map((column) => column.name).join(", ");
const columns_full = columns
  .map((column) => `${column.name} ${column.type}`)
  .join(", ");

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

// Create table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS ${table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns_full})`,
  function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Table ${table_name} created successfully`);

    // Iterate over the data and insert each item into the database
    data.elements.forEach((item) => {
      const insertSql = `INSERT INTO ${table_name}(${columns_names}) VALUES(?)`;
      db.run(insertSql, item, function (err) {
        if (err) {
          return console.error(err.message);
        }
        const id = this.lastID; // get the id of the last inserted row
        console.log(`Rows inserted, ID ${id}`);
      });
    });
  },
);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});

/** Database for lunchly */

const pg = require("pg");

const { Client } = require("pg");

const db = new pg.Client("postgresql:///lunchly");

const DB_URI =
  process.env.NODE_ENV === "test"
    ? `postgresql://postgres:${pw}@localhost/lunchly`
    : `postgresql://postgres:${pw}@localhost/lunchly_test`;

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;

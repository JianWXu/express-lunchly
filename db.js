/** Database for lunchly */

const pg = require("pg");

const { Client } = require("pg");

pw = process.env.PW;

const DB_URI = `postgresql://postgres:${pw}@localhost/lunchly`;

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;

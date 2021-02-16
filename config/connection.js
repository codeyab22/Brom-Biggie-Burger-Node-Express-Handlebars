// Set up MySQL connection.
var mysql = require("mysql");
var connection;
require('dotenv').config();
console.log("---", process.env.DB_pass)

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Adia1992",
  database: "burgers_db"
});
};

// Make connection.
connection.connect();

module.exports = connection;



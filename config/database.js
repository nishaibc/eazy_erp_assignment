const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nisha",
  database: "crud-api",
  insecureAuth: true,
});

connection.connect(function (err) {
  if (err) {
    return console.log("error : " + err.message);
  }
  console.log("database connected");
});

module.exports = connection;

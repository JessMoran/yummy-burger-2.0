// Set up MySQL connection.
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "JessMoran29",
  database: "yummy_burger_db"
});
/*let connection;

if (process.env.AWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "JessMoran29",
    database: "yummy_burger_db"
  })

  connection.connect();
}*/


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

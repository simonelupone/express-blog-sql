require("dotenv").config();

// importo mysql2
const mysql = require("mysql2");

// creo la connessione al database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// utilizzo la variabile per instaurare una connessione
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to mySQL");
});

module.exports = connection;

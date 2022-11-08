//To perform POSTgreSQL connection
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "search_engine_db",
  port: 5432,
});
 client.connect();


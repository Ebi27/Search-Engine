//To perform POSTgreSQL REST API connection
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "search_engine_db",
  port: 5432,
});
 client.connect();

 client.query(`SELECT * from search`, (err, res) =>{
  if(!err){
    res.send(err.rows);
  }else{
    console.log(err.message);
  }
   client.end;
});




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

const app = express();

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

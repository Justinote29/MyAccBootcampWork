//require dotenv at top to import the db connection info
require("dotenv").config();

//Connection to postgres db-  .extracting the Client object from pg library
const { Client } = require("pg");

//make our variables from .env file to build our connection to PG
//spreads out the .env file
const { PG_DB, PG_HOST, PG_USER, PG_PASS, PG_PORT } = process.env;

//info needed to connect
let connectionObject = {
  user: PG_USER,
  password: PG_PASS,
  port: PG_PORT,
  database: PG_DB,
  host: PG_HOST,
};

//get a connection handle- (gives us a way to connect, but we need to use it to actually connect)
const pg_connection = new Client(connectionObject);

//export the pg connection handle
module.exports = pg_connection;

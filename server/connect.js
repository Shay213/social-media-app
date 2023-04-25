import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  host: "localhost",
  user: "test",
  password: "Test*!!",
  database: "socialmedia",
});

export default db;

// PostgreSQL connection
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',               // your PostgreSQL user
  host: 'localhost',
  database: 'feedbackdb',         // your database
  password: 'prakash',            // your password
  port: 5432
});
module.exports = pool;


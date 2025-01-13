const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    database: "bookdb",
    password: "1234567890",
});

module.exports = pool; // Ensure this is present

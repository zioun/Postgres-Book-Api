const {pool} = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "database-user",
    port: 5432,
    database: "bookDB",
});
module.exports = pool;
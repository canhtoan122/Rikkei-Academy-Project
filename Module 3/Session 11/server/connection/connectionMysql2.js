const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: "test_db",
    password: "",
    port: 3306,
    user: `root`,
})
const database = pool.promise();
module.exports = database;
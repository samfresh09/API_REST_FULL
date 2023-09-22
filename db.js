const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "freshSAM1234",
    database: "apirest_nodejs",
})

mysqlPool.query("SELECT 1")
    .then(data => console.log("connection a la base de donne fais avec success"))
    .catch(err => console.log("ERROR DE CONNECTION A LA DB"))
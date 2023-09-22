const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "freshSAM1234",
    database: "apirest_nodejs",
})


module.exports = mysqlPool
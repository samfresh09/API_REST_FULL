const express = require("express")
const bodyParser = require("body-parser")
const uuid = require("uuid")
const db = require("./db")
const produit = require("./controllers/produitController")


const app = express();
require("express-async-errors")

app.use(bodyParser.json())
app.use("/api/", produit)

//middleware de gestion des erreur global

// app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(err.status || 500).send("something went wrong!")
// })


db.query("SELECT 1")
    .then(data => console.log("connection a la base de donne fais avec success"))
    .catch(err => console.log("ERROR DE CONNECTION A LA DB"))


app.listen(3001, () => {
    console.log(uuid.v4())
})
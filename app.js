const express = require("express")
const uuid = require("uuid")
const db = require("./db")
const produit = require("./controllers/produitController")

const app = express()

app.use(produit)

db.query("SELECT 1")
    .then(data => console.log("connection a la base de donne fais avec success"))
    .catch(err => console.log("ERROR DE CONNECTION A LA DB"))


app.listen(3001, () => {
    console.log(uuid.v4())
})
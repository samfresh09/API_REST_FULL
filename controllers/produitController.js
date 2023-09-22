const express = require("express")

const router = express.Router()

const db = require("../db")

//simple methode de retout d'un test
router.get("/", (req, res) => {
    res.send(data)
})

//recuperation de la liste de toutes les produit de la base de donne
router.get("/all/product/", (req, res) => {
    db.query("SELECT * FROM produit")
        .then(data => res.send(data[0]))
        .catch(err => res.console.log('erreur envoie de la liste des produit'))
})

module.exports = router
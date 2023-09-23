const express = require("express")

const router = express.Router()

const db = require("../db")

//simple methode de retout d'un test
router.get("/", (req, res) => {
    res.send(data)
})

//recuperation de la liste de toutes les produit de la base de donne
router.get("/all/product/", async(req, res) => {
    const [allProduct] = await db.query("SELECT * FROM produit")
        .catch(err => res.console.log('erreur envoie de la liste des produit'))
    res.send(allProduct)
})

module.exports = router
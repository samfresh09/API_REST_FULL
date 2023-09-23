const express = require("express")

const router = express.Router()

//importation du service qui gere les requete sur la table produit
const produitService = require("../services/produit.service")


//simple methode de retout d'un test
router.get("/", (req, res) => {
    res.send(data)
})

//recuperation de la liste de toutes les produit de la base de donne
router.get("/all/product/", async(req, res) => {
    const allProduct = await produitService.getAllProduct()
    if (allProduct.length == 0) {
        res.status(404).json("vous n'avez aucun element enregistrer dans la base de donne")
    } else {
        res.send(allProduct)
    }

})

//recuperation d'un utilisateur selon son id
router.get("/all/product/:id", async(req, res) => {
    const oneProduct = await produitService.getOneProduct(req.params.id)
    if (oneProduct.length == 0) {
        res.status(404).json("le produit dont id est:" + req.params.id + " n'existe pas dans la base")
    } else {
        res.send(oneProduct)
    }
})

//suppression d'un produit dand la base de donne
router.delete("/all/product/:id", async(req, res) => {
    const oneProductAffectrows = await produitService.deleteProduct(req.params.id)
    console.log();
    if (oneProductAffectrows == 0) {
        res.status(404).json("le produit dont id est:" + req.params.id + " n'existe pas dans la base")
    } else {

        res.status(200).send("l'element a ette bien supprimer")
    }
})

//ajout d'un produit
router.post("/all/product/", async(req, res) => {
    await produitService.addOrUpdateProduct(req.body)

    res.send("produit creer avec succes")

})

//modifier les info  d'un produit
router.put("/all/product/:id", async(req, res) => {
    const data = await produitService.addOrUpdateProduct(req.body, req.params.id)

    if (data == 0) {
        res.status(404).json("le produit dont id est:" + req.params.id + " n'existe pas dans la base")
    } else {

        res.status(200).send("l'element a ete bien modifier")
    }

})

module.exports = router
const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("creation de la premiere methode")
})

module.exports = router
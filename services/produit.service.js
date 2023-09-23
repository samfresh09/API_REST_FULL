const { Model } = require("sequelize")
const db = require("../db")

//recuperation de tous les produit dans la db
module.exports.getAllProduct = async() => {
    const [rows] = await db.query("SELECT * FROM produit")

    return rows
}

//recuperation des information d'un seule produit
module.exports.getOneProduct = async(id) => {
    const [rows] = await db.query("SELECT * FROM produit WHERE id=?", [id])

    return rows
}

//suppression de produit
module.exports.deleteProduct = async(id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM produit WHERE id=?", [id])

    return affectedRows
}

//ajouter de produit

module.exports.addOrUpdateProduct = async(obj, id = 0) => {
    const [
        [
            [{ affectedRows }]
        ]
    ] = await db.query("call apirest_nodejs.usp_produit_add_edit(?,?,?,?)", [id, obj.titre, obj.prix, obj.description])


    // return rows[0][0].affectedRows
    return affectedRows
}

// deleteOneProduct= async()=>{
//     const 
// }
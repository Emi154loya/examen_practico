let mongoose = require('mongoose');
//Vamos a unirlo al modelo
let Pintores = require('../models/pintores');

let pintoresController = {};

/*LISTAR -> FIND()*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if(err){
                console.log('Error: ', err)
            }
            res.render('../views/index',{
                pintores: pintor,
                titulo: "Listado de pintores",
                year: new Date().getFullYear()
            })
        })
};

module.exports = pintoresController;
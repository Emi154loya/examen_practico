const express = require('express');
//Vamos a routear a los pintores
let pintor = require('../controllers/PintoresController.js'); //Aqui si se especifica la extencion del archivo, en este caso js

//creamos nuestras rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;
const mongoose = require('mongoose');
//Creamos un Schema(nuestra base de datos)

let Schema = mongoose.Schema;

//Creamos la coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model('pintores', PintoresSchema);
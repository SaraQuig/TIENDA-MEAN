const mongoose = require('mongoose');

//atributos del producto los cuales estan en la bd
const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});
//no borrar importante
module.exports = mongoose.model('Producto', ProductoSchema);
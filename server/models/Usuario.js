const { mongoose } = require('mongoose')
// const Schema = mongoose.Schema

const UsuarioSchema = mongoose.Schema({
    //validaciones  
    //datos que guardo de los usuarios
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    psw: {
        type: String,
        require: true,
        trim: true
    },
    active: { type: Boolean, default: true }
},
    {
        timestamps: true
    })
//necesario no borrar
module.exports = mongoose.model('Usuario', UsuarioSchema)



//interactuando con la base de datos
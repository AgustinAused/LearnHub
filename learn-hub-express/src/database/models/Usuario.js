let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')
let UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaCreacion: Date,
    titulo: String,
    telefono: String,
    nacimiento: Date,
    servicios: {id:mongoose.ObjectId,ref: 'Servicio'},
})
UsuarioSchema.plugin(mongoosePaginate)
const Usuario = mongoose.model('Usuario', UsuarioSchema)
module.exports = Usuario;
let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

UsuarioSchema.plugin(mongoosePaginate)
const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario;
let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ComentarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

ComentarioSchema.plugin(mongoosePaginate)
const Comentario = mongoose.model('Comentario', ComentarioSchema)

module.exports = Comentario;
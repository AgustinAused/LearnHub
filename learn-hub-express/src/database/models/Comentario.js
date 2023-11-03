let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ComentarioSchema = new mongoose.Schema({
    contenido: String,
    email: String,
    calificacion: String,
    date: Date,
    state: String
})

ComentarioSchema.plugin(mongoosePaginate)
const Comentario = mongoose.model('Comentario', ComentarioSchema)

module.exports = Comentario;
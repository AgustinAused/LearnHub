let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')
let ComentarioSchema = new mongoose.Schema({
    content : String,
    email: String,
    score : String,
    date: Date,
    state: String
})
ComentarioSchema.plugin(mongoosePaginate)
const Comentario = mongoose.model('Comentarios', ComentarioSchema)
module.exports = Comentario;
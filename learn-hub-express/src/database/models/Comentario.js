let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate')
let ComentarioSchema = new Schema({
    name : String,
    content : String,
    email: String,
    score : String,
    date: Date,
    state: String
})
ComentarioSchema.plugin(mongoosePaginate)
const Comentario = mongoose.model('Comentarios', ComentarioSchema)
module.exports = Comentario;
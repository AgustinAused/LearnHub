let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')
let ServicioSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : String,
    image : String,
    date : Date,
    state : String,
    frequency : String,
    duration : String,
    categoria: String,
    // comments: [{id:mongoose.ObjectId,ref: 'Comentario'}],
    // hiring: [{id:mongoose.ObjectId,ref: 'Contratacion'}],
}) 
ServicioSchema.plugin(mongoosePaginate)
const Servicio = mongoose.model('Servicio', ServicioSchema)
module.exports = Servicio;
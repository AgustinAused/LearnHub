let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ServicioSchema = new mongoose.Schema({
    name: String,
    descripcion: String,
    precio: String,
    imagen: String,
    date: Date,
    state: String,
    frecuencia: String,
    duracion: String,
    categoria: String,
    comentarios: {id:mongoose.ObjectId,ref: 'Comentario'},
    contrataciones: {id:mongoose.ObjectId,ref: 'Contratacion'},
}) 

ServicioSchema.plugin(mongoosePaginate)
const Servicio = mongoose.model('Servicio', ServicioSchema)

module.exports = Servicio;
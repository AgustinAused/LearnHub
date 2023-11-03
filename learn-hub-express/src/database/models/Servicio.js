let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ServicioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

ServicioSchema.plugin(mongoosePaginate)
const Servicio = mongoose.model('Servicio', ServicioSchema)

module.exports = Servicio;
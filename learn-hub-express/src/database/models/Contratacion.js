let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ContratacionSchema = new mongoose.Schema({
    name: String,
    apellido: String,
    email: String,
    telefono: String,
    horario: String,
    mensaje: String,
    estado: String,
})

ContratacionSchema.plugin(mongoosePaginate)
const Contratacion = mongoose.model('Contratacion', ContratacionSchema)

module.exports = Contratacion;
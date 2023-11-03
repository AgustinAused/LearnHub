let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')


let ContratacionSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

ContratacionSchema.plugin(mongoosePaginate)
const Contratacion = mongoose.model('Contratacion', ContratacionSchema)

module.exports = Contratacion;
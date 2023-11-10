let mongoose = require('mongoose')
let mongoosePaginate = require('mongoose-paginate')
let ContratacionSchema = new mongoose.Schema({
    serviceType: String,
    name: String,
    lastName: String,
    email: String,
    telephone : String,
    hour : String,
    message : String,
    totalCost : String,
    state : String,
})
ContratacionSchema.plugin(mongoosePaginate)
const Contratacion = mongoose.model('Contratacion', ContratacionSchema)
module.exports = Contratacion;
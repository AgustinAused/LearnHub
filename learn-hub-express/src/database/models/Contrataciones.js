let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate')
let ContratacionSchema = new Schema({
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
const Contratacion = mongoose.model('Contrataciones', ContratacionSchema)
module.exports = Contratacion;
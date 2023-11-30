let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate')
let ServicioSchema = new Schema({
    name : String,
    description : String,
    price : String,
    responsable : {
        type: Schema.Types.ObjectId,
        ref: 'usuarios', // Aquí debes especificar el nombre del modelo de Usuario
        required: true
    },
    image : String,
    date : Date,
    state : String,
    frequency : String,
    duration : String,
    category: String,
    classType : String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comentario',
    }],
    hiring: [{
        type: Schema.Types.ObjectId,
        ref: 'Contrataciones',
    }],
}) 
ServicioSchema.plugin(mongoosePaginate)
const Servicio = mongoose.model('servicios', ServicioSchema)
module.exports = Servicio;
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let mongoosePaginate = require("mongoose-paginate");
let UsuarioSchema = new Schema({
  name: String,
  email: String,
  password: String,
  creationDate: Date,
  degree: String,
  expirience : String, 
  phono: String,
  services: [{ type: Schema.Types.ObjectId, ref: "servicios" }],
  image: {
    data: Buffer,
    contentType: String
  }
});
  

UsuarioSchema.plugin(mongoosePaginate);
const Usuario = mongoose.model("usuarios", UsuarioSchema);
module.exports = Usuario;

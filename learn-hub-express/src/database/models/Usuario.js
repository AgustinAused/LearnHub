let mongoose = require("mongoose");
let mongoosePaginate = require("mongoose-paginate");
let UsuarioSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  creationDate: Date,
  degree: String,
  phono: String,
  birth: Date,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servicio" }],
  image: {
    data: Buffer,
    contentType: String
  }
});
  

UsuarioSchema.plugin(mongoosePaginate);
const Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;

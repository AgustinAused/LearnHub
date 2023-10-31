
const mongoose = require('mongoose');
const { DBConnection } = require('../interfaces/DBConnection');

// URL de conexión a la base de datos (puedes obtenerla de una variable de entorno)
const dbUrl = process.env.MONGODB_URI || 'mongodb+srv://agusaused:agustin@cluster0.plu3naj.mongodb.net/';

// Opciones de conexión a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};
class MongoDBConnection extends DBConnection {

    connect() {
        // Conectar a la base de datos
        mongoose.connect(dbUrl, options)
        .then(() => {
        console.log('Conexión a la base de datos exitosa');
        })
        .catch(error => {
        console.error('Error de conexión a la base de datos:', error);
        });
    }

    disconnect() {
        //desconexion a la base de datos 
        mongoose.disconnect();
    }
}



// Exportar la conexión para que esté disponible en otros módulos
module.exports = MongoDBConnection;
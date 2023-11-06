

//Database connection --
let bluebird = require('bluebird');
let mongoose = require('mongoose')
mongoose.Promise = bluebird;
let dbUrl = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`
console.log("BD", dbUrl);
let options = {
    useNewUrlParser: true,
    connectTimeoutMS: 20000,
    useUnifiedTopology: true
};
class MongooseConnection  {

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
module.exports = MongooseConnection;
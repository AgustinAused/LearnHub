// dbConnectionFactory.js
const MongoDBConnection = require('./implementations/mongoDBConnection');

class DBConnectionFactory {
  static createConnection(type) {
    if (type === 'mongodb') {
      return new MongoDBConnection().connect();
    } else {
      throw new Error('Tipo de conexión no válido');
    }
  }
  static closeConnection(type) {
    if (type === 'mongodb') {
      return new MongoDBConnection().connect();
    } else {
      throw new Error('Tipo de conexión no válido');
    }
  }
}

module.exports = DBConnectionFactory;

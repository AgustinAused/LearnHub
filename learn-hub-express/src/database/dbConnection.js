// Factory Pattern
// Clase abstracta para la conexión a la base de datos
class DBConnection {
    connect() {
        throw new Error('Método no implementado');
    }
    disconnect() {
        throw new Error('Método no implementado');
    }
}

module.exports = DBConnection;

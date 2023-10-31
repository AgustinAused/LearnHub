const express = require('express');
const app = express();
//incorporo cors
const cors = require('cors');
const port = 3000;

app.use(cors());
//aplico cors
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




// Obtener una conexión MongoDB 
const DBConnectionFactory = require('./dbConnectionFactory');
const mongoConnection = DBConnectionFactory.createConnection('mongodb');
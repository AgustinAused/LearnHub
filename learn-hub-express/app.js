const express = require('express');
const app = express();
const path = require('path');

let cookieParser = require('cookie-parser');
app.use(express.json());

//Rutas
const indexRouter = require('./src/routers/index');
const apiRouter = require('./src/routers/api');

//incorporo cors
let cors = require('cors');

//configuro el .env mas facil con ese modulo;
require('dotenv').config();

// configuro la carpeta public como estatica
app.use(express.static('public'));
//serivo imagenes de la carpeta public
app.use('/uploads', express.static(path.join(__dirname, 'public/usersProfileImages')));




//aplico cors
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});



//Database connection --
const MongooseConnection = require('./src/database/implementations/mongooseConnection.js');

let db = new MongooseConnection();
db.connect();

//Indico las rutas de los endpoint
app.use('/api', apiRouter);
app.use('/', indexRouter);



let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}  🍕🥰`);
});

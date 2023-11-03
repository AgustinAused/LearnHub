const express = require('express');
const app = express();
let cookieParser = require('cookie-parser');
let bluebird = require('bluebird');
// const DBConnectionFactory = require('../learn-hub-express/src/databases/dbConnectionFactory');
const { MongoDB } = require('./db');

//incorporo cors
let cors = require('cors');

//configuro el .env mas facil con ese modulo;
require('dotenv').config();



//aplico cors
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//Database connection --
let mongoose = require('mongoose')
mongoose.Promise = bluebird;
let url = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`
console.log("BD", url);
let opts = {
    useNewUrlParser: true,
    connectTimeoutMS: 20000,
    useUnifiedTopology: true
};
mongoose.connect(url, opts)
    .then(() => {
        console.log(`Succesfully Connected to theMongodb Database..`)
    })
    .catch((e) => {
        console.log(`Error Connecting to the Mongodb Database...`);
        console.log(e);
    })
// const mongoConnection = MongoDB;


let port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}  🍕🥰`);
});

const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var bluebird = require('bluebird');

//incorporo cors
var cors = require('cors');

//onsole.log("processENV",process.env);
require('./config').config();



//aplico cors
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//Database connection --
var mongoose = require('mongoose')
mongoose.Promise = bluebird;
let url = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`
console.log(url)
let url1='mongodb+srv://learnhub:HfAWJssC7cjUAcMS@learnhub.x0r4mvm.mongodb.net/?retryWrites=true&w=majority'
console.log("BD",url);
let opts = {
  useNewUrlParser : true, 
  connectTimeoutMS:20000, 
  useUnifiedTopology: true
  };

mongoose.connect(url,opts)
  .then(() => {
    console.log(`Succesfully Connected to theMongodb Database..`)
  })
  .catch((e) => {
    console.log(`Error Connecting to the Mongodb Database...`),
    console.log(e)
  })

var port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




// Obtener una conexión MongoDB 
// const DBConnectionFactory = require('./dbConnectionFactory');
// const mongoConnection = DBConnectionFactory.createConnection('mongodb');
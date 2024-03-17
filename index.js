const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require("./routes/products.route.js");
const app = express();

require('dotenv').config()

// middleware for parsing data sent by the client in the body via json and form url encoded types respectively
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended: false option signifies that the URL-encoded data will be parsed using the querystring library instead of the qs library.

// route middleware for any request to '/' path
app.use("/", productsRoute);

// test parameter in the url represents the default database to use if a specific database is not specified during the connection e.g: 
// const { MongoClient } = require('mongodb'); 
// 
// const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }); 
// client.db('my_database');. 
mongoose.connect(`mongodb+srv://dean1993:${process.env.MONGO_DB_PASS}@db.uucpdeq.mongodb.net/test?retryWrites=true&w=majority`).then(() => {
    console.log('connected sucessfully to the mongo db')
    app.listen(3000, () => console.log('listening on port 3000'))
}).catch((e) => console.log('failed to connect to the mongo db', e))

const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require("./routes/products.route.js");
const app = express();

require('dotenv').config()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", productsRoute);


mongoose.connect(`mongodb+srv://dean1993:${process.env.MONGO_DB_PASS}@db.uucpdeq.mongodb.net/test?retryWrites=true&w=majority`).then(() => {
    console.log('connected sucessfully to the mongo db')
    app.listen(3000, () => console.log('listening on port 3000'))
}).catch((e) => console.log('failed to connect to the mongo db', e))

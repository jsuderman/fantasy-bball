//dependencies

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

//app config 

const app = express();
const port = process.env.PORT || 9000;

//middleware

const mongoURI = "mongodb+srv://admin:hx03drD9wEomzKZv@cluster0.yieom.mongodb.net/nbaLineup?retryWrites=true&w=majority"
//db config

//api routes

//listener
app.listen(port, () => console.log(`listening on port:${port}`));
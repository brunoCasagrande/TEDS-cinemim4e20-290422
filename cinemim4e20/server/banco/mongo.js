const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27010/cinemim4e20?authSource=cinemim4e20";
mongoose.connect(uri, { } );
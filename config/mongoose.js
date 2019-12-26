const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/media_website");

const db = mongoose.connection;



db.on('error', console.error.bind(console, "Error connecting to mongodb"));


db.once('open', function(){

    console.log("connected to database :: MongoDb");
});

module.exports = db;
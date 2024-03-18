const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Ayush:Atlas123@cluster0.yhqrglp.mongodb.net/bloggingappli"

const connectToMongoose = () => {
   mongoose.connect(mongoURI).then
   {
    console.log("connected to moongoose");
   }
};

module.exports = connectToMongoose;

// "mongodb://localhost:27017/bloggingappli";
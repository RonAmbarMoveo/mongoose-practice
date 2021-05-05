const mongoose = require('mongoose');

const URI = "mongodb+srv://ronambar:ambar9751@mycluster.4g8fp.mongodb.net/myDB?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!')
};

module.exports = connectDB;
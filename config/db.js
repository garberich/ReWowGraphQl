const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successful')
    } catch (error) {
        console.log('An error ocurred');
        console.log(error);
        process.exit(1);// Stop app
    }
};

module.exports = connectDB;
// connect ot mongo atlas

const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    if (!mongoURI) {
        console.error('MONGO_URI is not defined in env.');
        process.exit(1);
    }
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
// config db for mongo atlas

const mongoose = require('mongoose');
//require('dotenv').config();

const connectDB = async () => {
    if (!process.env.DB_URI) {
        console.error('DB_URI is not defined in environment variables');
        process.exit(1);
    }
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
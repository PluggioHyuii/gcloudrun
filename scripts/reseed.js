// reseed Todo items in the database

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = require('../config/db');
connectDB();

const Todo = require('../models/Todo');

const todoData = [
    { title: 'Buy groceries' },
    { title: 'Walk the dog' },
    { title: 'Read a book' },
    { title: 'Write code' },
    { title: 'Exercise' }
];

const reseed = async () => {
    try {
        await Todo.deleteMany({});
        console.log('Existing todos cleared.');
        await Todo.insertMany(todoData);
        console.log('New todos inserted.');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error reseeding todos:', err);
        mongoose.connection.close();
    }
};

reseed();
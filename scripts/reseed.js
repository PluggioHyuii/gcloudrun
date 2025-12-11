// reset and seed Todo

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = require('../config/connectDB');
connectDB();

const Todo = require('../models/Todo');

const todosData = [
    { title: 'Buy groceries'},
    { title: 'Walk the dog'},
    { title: 'Read a book'}
];

const reseed = async () => {
    try {
        await Todo.deleteMany({});
        console.log('Existing todos deleted.');
        await Todo.insertMany(todosData);
        console.log(todosData);
        console.log('Database reseeded with initial todos.');
    } catch (err) {
        console.error('Error reseeding database:', err);
    } finally {
        mongoose.connection.close();
    }
};

reseed();

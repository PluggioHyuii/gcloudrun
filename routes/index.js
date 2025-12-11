var express = require('express');
var router = express.Router();

const Todo = require('../models/Todo');

/* GET home page. */
router.get('/', async (req, res) => {
  let todos = await Todo.find();
  let views = 'index';
  let context = { 
    title: 'Weerapan Hello', 
    todos: todos };
  res.render(views, context);
});

module.exports = router;

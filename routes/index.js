var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');

/* GET home page. */
router.get('/', async (req, res) => {
  let port = process.env.PORT || 'not defined';
  let db_uri = process.env.DB_URI || 'not defined';
  let views = 'index';
  let todos = await Todo.find({});
  let context = { 
    title: 'Pluggio hello', 
    port: port,
    db_uri: db_uri,
    todos: todos
  };
  res.render(views, context);
});

module.exports = router;

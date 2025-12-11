var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  let port = process.env.PORT || 'not defined';
  let views = 'index';
  let context = { title: 'Pluggio hello', port: port };
  res.render(views, context);
});

module.exports = router;

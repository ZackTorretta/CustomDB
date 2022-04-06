const express = require('express');

const router = express.Router();
const controller = require('../Controller/userController');

// middleware

router.use((req, res, next) => {
  if (req.method
    === 'GET' || req.method === 'POST') {
    console.log('good to go');
    next();
  } else {
    res.send('Please enter a GET or a POST.');
  }
});
router.post('/', controller.postUser);
router.get('/users/:postId', controller.getUser);// changed this
module.exports = router;

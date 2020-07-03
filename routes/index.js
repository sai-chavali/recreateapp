const express = require('express');
const { isEmpty } = require('lodash');
const router = express.Router();

router.get('/users', (req, res) => {
  console.log('in server!')
  return res.json({
    name: 'test'
  });

});

module.exports = router;

const express = require('express');
const { isEmpty } = require('lodash');
const router = express.Router();

router.get('/users', (req, res) => {

  return res.json({
    name: 'test'
  });

});

module.exports = router;

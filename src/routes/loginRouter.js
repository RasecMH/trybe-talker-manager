const express = require('express');
const crypto = require('crypto');
const authValidation = require('../middlewares/authValidation');

const route = express.Router();

route.post('/', authValidation, async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = route; 
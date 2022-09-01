const express = require('express');
const crypto = require('crypto');

const route = express.Router();

route.post('/', async (req, res) => {
  // const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = route; 
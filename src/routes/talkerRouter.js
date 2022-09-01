const express = require('express');
const { readFile, getTalkerById } = require('../utils/fileHandlers');

const route = express.Router();

route.get('/', async (req, res) => {
  const talkers = await readFile();
  res.status(200).json(talkers);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalkerById(id);
  if (talker) return res.status(200).json(talker);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = route; 
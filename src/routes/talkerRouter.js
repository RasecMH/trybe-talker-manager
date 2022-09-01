const express = require('express');
const { readFile, getTalkerById, addTalker, updateTalkerById } = require('../utils/fileHandlers');
const { nameValidation,
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation } = require('../middlewares/fieldValidation');
  const tokenValidation = require('../middlewares/tokenValidation');

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

route.use(tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation);

route.post('/', async (req, res) => {
  const addedTalker = await addTalker(req.body);

  return res.status(201).json(addedTalker);
});

route.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTalker = await updateTalkerById(req.body, id);
  console.log(updatedTalker);
  return res.status(200).json(updatedTalker);
});

module.exports = route; 
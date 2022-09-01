const fs = require('fs').promises;
const { join } = require('path');

const pathname = '/src/talker.json';
const path = join(process.cwd(), pathname);

const readFile = async () => {
  try {
    const arrayTalker = await fs.readFile(path, 'utf8');
    return JSON.parse(arrayTalker);
  } catch (error) {
    return null;
  }
};

const getTalkerById = async (id) => {
  try {
    const arrayTalker = await readFile();
    const talkerById = arrayTalker.find((talker) => talker.id === Number(id));
    return talkerById;
  } catch (error) {
    return null;
  }
};

const addTalker = async (talker) => {
  try {
    const arrayTalker = await readFile();
    const objTalker = talker;
    objTalker.id = arrayTalker[arrayTalker.length - 1].id + 1;
    arrayTalker.push(talker);
    await fs.writeFile(path, JSON.stringify(arrayTalker));
    return talker;
  } catch (error) {
    return null;
  }
};

module.exports = { readFile, getTalkerById, addTalker };

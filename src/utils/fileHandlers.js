const fs = require('fs').promises;
const { join } = require('path');

const pathname = '/src/talker.json';

const readFile = async () => {
  try {
    const path = join(process.cwd(), pathname);
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

module.exports = { readFile, getTalkerById };

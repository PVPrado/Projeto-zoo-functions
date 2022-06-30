const data = require('../data/zoo_data');

const especies = data.species;
// const [first, second, trird, fourth, fifth, sixth, seventh, eighth, ninth] = especie;

function getSpeciesByIds(...ids) {
  if (ids === []) { return ids; }
  return ids.map((id) => especies.find((animal) => animal.id === id));
}

module.exports = getSpeciesByIds;

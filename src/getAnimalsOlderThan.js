const data = require('../data/zoo_data');

const especies = data.species;

function getAnimalsOlderThan(animal, age) {
  const objAnimal = especies.filter((nome) => nome.name === animal);
  return objAnimal[0].residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;

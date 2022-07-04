const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal, age) {
  const quantAnimais = {};
  if (!animal) {
    species.forEach((element) => {
      quantAnimais[element.name] = element.residents.length;
    });
    // console.log(quantAnimais);
    return quantAnimais;
  }
  const { specie } = animal;
  const filtered = species.filter((el) => el.name === specie);
  const [animalEscolhido] = filtered;
  if (animal.sex === undefined) { return animalEscolhido.residents.length; }
  return animalEscolhido.residents.filter((residente) => residente.sex === animal.sex).length;
}

countAnimals();

module.exports = countAnimals;

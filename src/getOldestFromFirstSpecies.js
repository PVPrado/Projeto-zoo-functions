const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);
const { employees } = data;
// console.log(employees);

function getOldestFromFirstSpecies(id) {
  const colaborador = employees.find((pessoa) => pessoa.id === id);
  const animal = colaborador.responsibleFor[0];
  const ani = species.find((e) => e.id === animal);
  let age = 0;
  let resultado = [];
  ani.residents.forEach((el) => {
    if (el.age > age) {
      age = el.age;
      resultado = [el.name, el.sex, el.age];
    }
  });
  return resultado;
}

module.exports = getOldestFromFirstSpecies;

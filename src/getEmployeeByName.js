const data = require('../data/zoo_data');

const colaboradores = data.employees;

function getEmployeeByName(name) {
  const objVazio = {};
  if (name == null) {
    return objVazio;
  }
  return colaboradores.find(({ firstName, lastName }) => firstName === name || lastName === name);
}

module.exports = getEmployeeByName;

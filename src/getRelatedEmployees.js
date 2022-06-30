const data = require('../data/zoo_data');

const colaboradores = data.employees;

function isManager(id) {
  return colaboradores.some((e) => e.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const f = colaboradores.filter((e) => e.managers.includes(managerId));
  const arr = f.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  if (isManager(managerId) === true) return arr;
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

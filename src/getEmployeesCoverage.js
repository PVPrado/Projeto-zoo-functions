const data = require('../data/zoo_data');

const { employees, species } = data;
function geraListaCompleta() {
  const listaEmpregados = [];
  employees.forEach((employee) => {
    listaEmpregados.push(
      {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: (employee.responsibleFor).map((item) =>
          species.find((specie) => specie.id === item).name),
        locations: (employee.responsibleFor).map((item) =>
          species.find((specie) => specie.id === item).location),
      },
    );
  });
  return listaEmpregados;
}
function capturaEmpregado(input) {
  const empregado = {
    id: input.id,
    fullName: `${input.firstName} ${input.lastName}`,
    species: input.responsibleFor.map((item) =>
      species.find((specie) => specie.id === item).name),
    locations: input.responsibleFor.map((item) =>
      species.find((specie) => specie.id === item).location),
  };
  return empregado;
}
function getEmployeesCoverage(param) {
  if (!param) return geraListaCompleta();
  let employeeCoverage = {};
  let entradaValida = false;
  employeeCoverage = employees.find((employee) => employee.id === param.id);
  if (employeeCoverage !== undefined) {
    return capturaEmpregado(employeeCoverage);
  }
  employeeCoverage = employees.find((employee) =>
    ((employee.firstName === param.name) || (employee.lastName === param.name)));
  if (employeeCoverage !== undefined) {
    entradaValida = true;
    return capturaEmpregado(employeeCoverage);
  }
  if (entradaValida === false) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;

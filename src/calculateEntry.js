/* eslint-disable no-shadow */
const data = require('../data/zoo_data');

const valores = data.prices;
//  console.log(valores);
const { adult, senior, child } = valores;
// console.log(adult);
// console.log(senior);
// console.log(child);

function countEntrants(entrants) {
  const visitantes = {
    child: entrants.filter((e) => e.age < 18).length,
    adult: entrants.filter((e) => e.age >= 18 && e.age < 50).length,
    senior: entrants.filter((e) => e.age >= 50).length,
  };
  return visitantes;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) { return 0; }
  const visitors = countEntrants(entrants);
  const sum = child * visitors.child
   + adult * visitors.adult + senior * visitors.senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };

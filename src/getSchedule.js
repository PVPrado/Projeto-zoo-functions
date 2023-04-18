const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getSchedule(scheduleTarget) {
  const animalName = species.filter((animal) => animal.name === scheduleTarget);
  const diaDisponivel = animalName.find((el) => el.availability).availability;
  // console.log(diaDisponivel);
}

getSchedule('lions');

module.exports = getSchedule;

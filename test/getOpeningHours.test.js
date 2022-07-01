const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Quando não for passado um argumento retorna um objeto completo', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Quando for passado Monday e 9 horas retorna que o zoologico esta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Quando for passado Tuesday e 9 horas retorna que o zoologico esta aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Quando for passado Wednesday e 9 horas retorna que o zoologico esta aberto', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Quando for passado Thursday e 9 horas retorna que o zoologico esta aberto', () => {
    expect(getOpeningHours('Thursday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Quando for passado uma hora >= 0 e <= 12 retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '23:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  test('Quando for passado um minuto >= 0 e <= 59 retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '12:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  test('Quando for passado uma nome diferente dos dias da semana retorna um erro', () => {
    expect(() => getOpeningHours('Mon', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Quando for passado um horario diferente de AM ou PM retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Quando for passado uma hora com letras retorna um erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  test('Quando for passado um minuto com letras retorna um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});

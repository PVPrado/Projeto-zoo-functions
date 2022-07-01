const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Quando for passado count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Quando for passado names retorna o nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Quando for passado averageAge retorna a media da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Quando for passado location retorna a localização dos elefantes dentro do Zooloǵico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Quando for passado popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Quando for passado availability retorna um arrau com a relação de dias em que é possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('Quando não for passado argumento retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});

const Solution = require('../Snow');

describe('Solucion', () => {
  describe('colectarNieveCuadratica', () => {
    it('debe calcular correctamente la recolección de nieve (cuadrática)', () => {
      const solution = new Solution();
      const list = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
      const result = solution.colectarNieveCuadratica(list);
      const expectedResult = 12;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('colectarNieveLineal', () => {
    it('debe calcular correctamente la recolección de nieve (Lineal)', () => {
    });
  });

  describe('colectarNieveBest', () => {
    it('debe calcular correctamente la recolección de nieve (Mejor)', () => {
    });
  });
});
import { DiffTwo } from "../DiffTwoArrays";

describe('Suite de pruebas para la función obtener el unico elemento que no se repite en dos arreglos', () => {
  beforeAll(() => {
    console.info('Autor: Hecho por Dan Teran');
  });
  it('debería de darnos el número de diferencia, (5)', () => {
    const arreglo1 = [6, 4];
    const arreglo2 = [6, 4, 5];
    const resultado = DiffTwo(arreglo1, arreglo2);
    expect(resultado).toEqual([5]);
});
});
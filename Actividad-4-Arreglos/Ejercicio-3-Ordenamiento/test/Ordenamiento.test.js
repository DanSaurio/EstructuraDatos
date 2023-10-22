import { Ordenamiento } from '../Ordenamiento'

describe('Suite de pruebas de la funcion Odenamiento() usando Arreglos', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Dan Joab Teran Diaz');
  })

  it('Se ordenara el array de números', () => {
    const array = [6, 2, 8, 3, 5];
    const arrayorn = [2, 3, 5, 6, 8];
    Ordenamiento(array);
    expect(array).toEqual(arrayorn);
  });
 
});
 
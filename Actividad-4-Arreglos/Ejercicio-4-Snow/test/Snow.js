import { FloodFill } from '../FloodFill'

describe('Suite de pruebas de la funcion FloodFill() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Dan Joab Teran Diaz');
  })
  it('Flood Fill Test', () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    
    const startX = 1;
    const startY = 1;
    const newColor = 2;
  
    const expectedResult = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    expect(FloodFill(matrix, startX, startY, newColor)).toEqual(expectedResult);

})})
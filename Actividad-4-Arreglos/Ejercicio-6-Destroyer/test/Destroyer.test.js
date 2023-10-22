import { Destroyer } from "../Destroyer"


describe('Pruebas para la función Destroyer', () => {
  beforeAll(() => {
    console.info('Autor: Hecho por Dan Joab Teran Diaz');
  })
  it('debería eliminar elementos específicos de un arreglo', () => {
    
    const arr = [1,2,3,4,5,1]
    const resultado = Destroyer(arr,2,3,4,5);

      expect((resultado)).toEqual([1,1]);
  });
});
const { LinkedList,Node } = require('../Lista-Enlazada-Unica'); 

describe('Pruebas de la Clase LinkedList, Realizadas por DanTeran', () => {
  test('Inserta al principio correctamente', () => {
    const linkedList = new LinkedList();

    // Agregagando nodos al principio
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);

    // Verificando si los nodos se agregaron correctamente al principio
    expect(linkedList.head.data).toBe(1);
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(3);
  });
});

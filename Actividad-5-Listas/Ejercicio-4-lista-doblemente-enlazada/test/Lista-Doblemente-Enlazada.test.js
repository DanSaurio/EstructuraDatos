const { LinkedList } = require('../Lista-Doblemente-Enlazada'); // Ajusta la ruta según tu estructura de archivos

describe('Pruebas de la Clase LinkedList', () => {
  test('Eliminar desde la cola funciona correctamente', () => {
    // Caso 1: Eliminar de una lista vacía
    const listaVacia = new LinkedList();
    listaVacia.deleteFromTail();
    expect(listaVacia.head).toBeNull();
    expect(listaVacia.tail).toBeNull();

    // Caso 2: Eliminar de una lista con un solo nodo
    const listaConUnNodo = new LinkedList();
    listaConUnNodo.head = { data: 1, next: null };
    listaConUnNodo.tail = listaConUnNodo.head;
    listaConUnNodo.deleteFromTail();
    expect(listaConUnNodo.head).toBeNull();
    expect(listaConUnNodo.tail).toBeNull();

    // Caso 3: Eliminar de una lista con varios nodos
    const listaConNodos = new LinkedList();
    listaConNodos.head = { data: 1, next: { data: 2, next: { data: 3, next: null } } };
    listaConNodos.tail = listaConNodos.head.next.next;
    listaConNodos.deleteFromTail();
    expect(listaConNodos.head.data).toBe(1);
    expect(listaConNodos.head.next.data).toBe(2);
    expect(listaConNodos.head.next.next).toBeNull();
    expect(listaConNodos.tail).toBe(listaConNodos.head.next);
  });
});

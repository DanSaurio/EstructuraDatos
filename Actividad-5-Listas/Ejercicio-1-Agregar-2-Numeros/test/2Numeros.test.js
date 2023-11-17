const { ListNode, Agg2 } = require('../2Numeros');

// Importa la clase y la función de tu código principal
// Define tus pruebas utilizando una biblioteca de pruebas como Jest
test('suma de listas enlazadas By Dan Teran', () => {
    // Crea las listas enlazadas para los números 243 y 465
    const l1 = new ListNode(3);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(2);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    // Llama a la función para sumar los números
    const result = Agg2(l1, l2);

    // Realiza las aserciones necesarias para verificar el resultado
    expect(result.val).toBe(8);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(7);
});

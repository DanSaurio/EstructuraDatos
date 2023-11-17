const LinkedList = require('../Lista-Inversa-Enlazada');

test('lista By DanTeran, Agregamos elementos a la lista enlazada', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.head.val).toBe(1); 
  expect(linkedList.head.next.val).toBe(2); 
  expect(linkedList.head.next.next.val).toBe(3); 
  expect(linkedList.head.next.next.next).toBeNull(); 
});
test('Agregando elementos a la lista enlazada, probando el siguiente intento', () => {
    const linkedList = new LinkedList();
    linkedList.append(6);
    linkedList.append(7);
    linkedList.append(8);
  
    expect(linkedList.head.val).toBe(6); 
    expect(linkedList.head.next.val).toBe(7); 
    expect(linkedList.head.next.next.val).toBe(8); 
    expect(linkedList.head.next.next.next).toBeNull(); 
  });
  test('Probaremos con char y numeros ', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append(4);
    linkedList.append('c');
  
    expect(linkedList.head.val).toBe('a'); 
    expect(linkedList.head.next.val).toBe(4); 
    expect(linkedList.head.next.next.val).toBe('c'); 
    expect(linkedList.head.next.next.next).toBeNull(); 
  });
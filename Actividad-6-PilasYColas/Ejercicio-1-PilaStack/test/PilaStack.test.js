const { Stack } = require('../PilaStack');
const assert = require('assert'); 
describe('Stack', () => {
  it('should initialize an empty stack', () => {
    const stack = new Stack();
    assert.strictEqual(stack.size(), 0);
    assert.strictEqual(stack.isEmpty(), true);
  });

  it('should push elements onto the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.strictEqual(stack.size(), 3);
    assert.strictEqual(stack.isEmpty(), false);
    assert.strictEqual(stack.peek(), 3);
  });

  it('should pop elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.strictEqual(stack.pop(), 3);
    assert.strictEqual(stack.pop(), 2);
    assert.strictEqual(stack.pop(), 1);
    assert.strictEqual(stack.size(), 0);
    assert.strictEqual(stack.isEmpty(), true);
  });

  it('should handle peek and pop on an empty stack', () => {
    const stack = new Stack();
    assert.strictEqual(stack.peek(), 'La pila está vacía');
    assert.strictEqual(stack.pop(), 'La pila está vacía');
  });
});

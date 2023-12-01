const Stack = require('../PilaDePlatos');

describe('Stack', () => {
  it('should initialize an empty stack', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should push elements onto the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(3);
  });

  it('should pop elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should handle peek and pop on an empty stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });
});

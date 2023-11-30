const { PriorityQueue } = require('../Lista-Enlazada-Unica');  // Ajusta la ruta del archivo según tu estructura de carpetas

describe('PriorityQueue', () => {
  it('should initialize an empty priority queue', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('should enqueue elements into the priority queue', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Patient 1', priority: 3 });
    priorityQueue.enqueue({ node: 'Patient 2', priority: 1 });
    priorityQueue.enqueue({ node: 'Patient 3', priority: 2 });
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  it('should dequeue elements from the priority queue based on priority', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Patient 1', priority: 3 });
    priorityQueue.enqueue({ node: 'Patient 2', priority: 1 });
    priorityQueue.enqueue({ node: 'Patient 3', priority: 2 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Patient 2', priority: 1 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Patient 3', priority: 2 });
    expect(priorityQueue.dequeue()).toEqual({ node: 'Patient 1', priority: 3 });
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('should handle dequeue on an empty priority queue', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.dequeue()).toBe("La cola está vacía");
  });
  

  it('should handle isEmpty on a non-empty priority queue', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({ node: 'Patient 1', priority: 3 });
    expect(priorityQueue.isEmpty()).toBe(false);
  });
});


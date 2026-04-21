# Queue Interview Questions

## Q1: What is a Queue?
A Queue is a linear data structure that follows FIFO:
First In, First Out.

Main operations:
- `enqueue` (insert at rear)
- `dequeue` (remove from front)
- `front/peek` (read front element)

---

## Q2: When to use Queue?
Use queue when tasks/items must be processed in arrival order.

Common scenarios:
- task scheduling
- request buffering
- BFS traversal
- messaging systems

---

## Real-life examples

1. Printer queue  
First document sent is printed first.

2. Customer support tickets  
Older tickets are handled before newer ones.

3. CPU/process scheduling  
Processes wait in ready queue.

4. Breadth-first search in graph/tree  
Nodes are explored level by level using queue.

---

## Q3: Implement Queue using array
~~~ts
class Queue<T> {
  private inStack: T[] = [];
  private outStack: T[] = [];

  enqueue(value: T): void {
    this.inStack.push(value);
  }

  dequeue(): T | undefined {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop();
  }

  front(): T | undefined {
    if (this.outStack.length > 0) {
      return this.outStack[this.outStack.length - 1];
    }
    return this.inStack[0];
  }

  size(): number {
    return this.inStack.length + this.outStack.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
~~~

---

## Q4: Time complexity?
- `enqueue`: `O(1)`
- `dequeue`: `O(1)` amortized
- `front`: `O(1)`
- `size`: `O(1)`

---

## Common interview questions

1. Why use queue in BFS?  
Expected: it preserves level-order exploration.

2. Implement queue using two stacks.  
Expected: in-stack for enqueue, out-stack for dequeue.

3. What is circular queue and why useful?  
Expected: fixed-size buffer with wrap-around index.

4. Queue vs priority queue?  
Expected:
- queue: arrival order
- priority queue: highest/lowest priority first

5. How to design rate-limiter using queue?  
Expected: store timestamps, remove expired, check window size.

# Stack Interview Questions

## Q1: What is a Stack?
A Stack is a linear data structure that follows LIFO:
Last In, First Out.

Main operations:
- `push` (insert at top)
- `pop` (remove from top)
- `peek` (read top without removing)

---

## Q2: When to use Stack?
Use stack when the latest item must be processed first.

Common scenarios:
- undo/redo
- function call stack
- expression evaluation / parentheses matching
- DFS traversal

---

## Real-life examples

1. Browser back button  
Most recent page is visited first when going back.

2. Undo in text editor  
Latest edit action is undone first.

3. Plate stack  
Top plate is removed first.

4. Recursive function calls  
Newest function frame returns first.

---

## Q3: Implement Stack using array
~~~ts
class Stack<T> {
  private items: T[] = [];

  push(value: T): void {
    this.items.push(value);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
~~~

---

## Q4: Time complexity?
- `push`: `O(1)` amortized
- `pop`: `O(1)`
- `peek`: `O(1)`
- `size`: `O(1)`

---

## Common interview questions

1. How to check balanced parentheses?  
Expected: push opening bracket, pop and match closing bracket.

2. Implement min stack with `getMin()` in `O(1)`?  
Expected: maintain second stack of minimums.

3. Evaluate postfix expression?  
Expected: scan tokens and use stack for operands/operators.

4. Why does recursion use stack memory?  
Expected: each function call pushes a frame on call stack.

5. Stack vs Queue difference?  
Expected: stack is LIFO, queue is FIFO.

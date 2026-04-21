# Heap Interview Questions

## Q1: What is a Heap?
A Heap is a complete binary tree (usually array-backed) that satisfies heap property.

Types:
- Min Heap: parent <= children
- Max Heap: parent >= children

It is commonly used to implement priority queues.

---

## Q2: When to use Heap?
Use heap when you repeatedly need min/max element with efficient updates.

Common scenarios:
- job scheduling by priority
- top K frequent elements
- streaming median / Kth largest
- Dijkstra's shortest path (priority queue)

---

## Real-life examples

1. Task scheduler  
Higher-priority tasks are processed earlier.

2. Emergency room triage  
Critical patients are served before less urgent ones.

3. Top trending products  
Maintain top K products by score.

4. Merge K sorted lists  
Always pick smallest current element using min heap.

---

## Q3: Implement Heap using array
~~~ts
class MinHeap {
  private arr: number[] = [];

  push(x: number): void {
    this.arr.push(x);
    this.heapifyUp(this.arr.length - 1);
  }

  pop(): number | undefined {
    if (this.arr.length === 0) return undefined;
    const top = this.arr[0];
    const last = this.arr.pop()!;
    if (this.arr.length > 0) {
      this.arr[0] = last;
      this.heapifyDown(0);
    }
    return top;
  }

  peek(): number | undefined {
    return this.arr[0];
  }

  private heapifyUp(i: number): void {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.arr[p] <= this.arr[i]) break;
      [this.arr[p], this.arr[i]] = [this.arr[i], this.arr[p]];
      i = p;
    }
  }

  private heapifyDown(i: number): void {
    const n = this.arr.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;

      if (l < n && this.arr[l] < this.arr[smallest]) smallest = l;
      if (r < n && this.arr[r] < this.arr[smallest]) smallest = r;
      if (smallest === i) break;

      [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
      i = smallest;
    }
  }
}
~~~

---

## Q4: Time complexity?
- `peek`: `O(1)`
- `push`: `O(log n)`
- `pop` (extract min/max): `O(log n)`
- build heap from array: `O(n)`

---

## Common interview questions

1. Why is heap stored as array?  
Expected: complete tree allows parent/child index math.

2. Difference between heap and BST?  
Expected: heap gives fast min/max only; BST supports ordered traversal/search.

3. Find Kth largest element efficiently.  
Expected: min heap of size K or max heap extraction.

4. Why build heap in `O(n)` not `O(n log n)`?  
Expected: bottom-up heapify has linear total work.

5. When use min heap vs max heap?  
Expected:
- min heap for smallest-first
- max heap for largest-first

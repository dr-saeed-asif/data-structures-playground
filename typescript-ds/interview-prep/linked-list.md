# Linked List Interview Questions

## Q1: What is a Linked List?
A Linked List is a linear data structure made of nodes.
Each node stores:
- data
- pointer/reference to next node (and optionally previous node)

Types:
- singly linked list
- doubly linked list

---

## Q2: When to use Linked List?
Use linked list when you need efficient insert/delete after known node references.

Common scenarios:
- frequent insertions/deletions in middle
- implementing stacks/queues/deques
- LRU cache internals (with hash map)

---

## Real-life examples

1. Music playlist (next/previous track)  
Works like doubly linked list.

2. Browser history navigation  
Back and forward pointers.

3. Undo/redo chain  
Move through actions in both directions.

4. Free-list in memory allocators  
Manage reusable memory blocks as linked nodes.

---

## Q3: Implement Linked List (TypeScript)
~~~ts
class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;

  prepend(value: T): void {
    this.head = new ListNode(value, this.head);
  }

  append(value: T): void {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
  }

  delete(value: T): boolean {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    let cur = this.head;
    while (cur.next && cur.next.value !== value) cur = cur.next;
    if (!cur.next) return false;
    cur.next = cur.next.next;
    return true;
  }
}
~~~

---

## Q4: Time complexity?
- Access by index: `O(n)`
- Search by value: `O(n)`
- Insert/delete at head: `O(1)`
- Insert at tail: `O(1)` with tail pointer, otherwise `O(n)`

---

## Common interview questions

1. Reverse a linked list iteratively.  
Expected: track `prev`, `curr`, `next` pointers.

2. Detect cycle in linked list.  
Expected: Floyd's slow/fast pointers.

3. Find middle node of linked list.  
Expected: slow/fast pointers.

4. Remove Nth node from end.  
Expected: two-pointer gap method.

5. Merge two sorted linked lists.  
Expected: iterative merge with dummy head.

6. Why linked list for LRU cache?  
Expected: `O(1)` move/remove with node references + HashMap.

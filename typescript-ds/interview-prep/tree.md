# Tree Interview Questions

## Q1: What is a Tree?
A tree is a hierarchical data structure made of nodes connected by edges.
It has one root, each node can have children, and there are no cycles.

---

## Q2: When to use Tree?
Use a tree when data is naturally hierarchical or when you need ordered and fast search/update patterns.

Common choices:
- Binary Tree / Binary Search Tree (BST): ordered data, range queries
- Trie: prefix search (autocomplete, dictionary)
- Heap: priority scheduling (top item fast)
- File-system tree: nested folders/files

---

## Real-life examples

1. File system  
`C:/Users/Aqib/Documents` is a root -> folder -> subfolder chain.

2. Company org chart  
CEO -> Engineering Manager -> Developer.

3. E-commerce categories  
Electronics -> Laptops -> Gaming Laptops.

4. DOM in browser  
`html` -> `body` -> `div` -> `button`.

5. DNS resolution hierarchy  
Root -> `.com` -> `example.com` -> subdomain.

6. Autocomplete dictionary (Trie)  
Words share prefixes like `car`, `care`, `careful`.

---

## Q3: Implement Tree using array
~~~ts
class ArrayTree<T> {
  private nodes: T[] = [];

  add(value: T): void {
    this.nodes.push(value);
  }

  removeLast(): T | undefined {
    return this.nodes.pop();
  }

  size(): number {
    return this.nodes.length;
  }

  // For complete-binary-tree style indexing
  leftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  rightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  parentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }
}
~~~

---

## Q4: Time complexity?
Depends on tree type:

- BST (average): search/insert/delete = `O(log n)`
- BST (worst, unbalanced): search/insert/delete = `O(n)`
- Balanced BST (AVL/Red-Black): `O(log n)` guaranteed
- Trie: insert/search prefix = `O(L)` where `L` is word length
- Heap: insert/delete-top = `O(log n)`, peek-top = `O(1)`

---

## Common interview questions

1. What is the difference between Binary Tree and BST?  
Expected: BST has ordering rule: left < root < right.

2. How do you validate if a binary tree is a BST?  
Expected: DFS with lower/upper bounds.

3. What are preorder, inorder, postorder traversals?  
Expected:
- preorder: root, left, right
- inorder: left, root, right
- postorder: left, right, root

4. Why can BST become slow, and how do you fix it?  
Expected: It can become skewed (`O(n)`), use self-balancing BST.

5. Lowest Common Ancestor (LCA) of two nodes?  
Expected: Use recursion/path logic; in BST use value ordering.

6. Find tree height/depth.  
Expected: recursive DFS; height = `1 + max(left, right)`.

7. Serialize and deserialize a tree.  
Expected: preorder/BFS with null markers.

8. Level order traversal?  
Expected: BFS using queue.

9. How does Trie help autocomplete?  
Expected: prefix node lookup then DFS all suffixes.

10. Difference between DFS and BFS on trees?  
Expected:
- DFS: stack/recursion, deep exploration first
- BFS: queue, level-by-level exploration

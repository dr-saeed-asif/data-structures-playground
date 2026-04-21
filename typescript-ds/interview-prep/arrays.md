# Array Interview Questions

## Q1: What is an array?
An array is a linear data structure that stores elements in contiguous memory and supports direct index-based access.

---

## Q2: When should you use arrays?
Use arrays when you need fast reads by index, predictable iteration order, and compact storage.

Common scenarios:
- storing sequential records
- frequency/counting problems
- two-pointer and sliding-window questions
- matrix/grid problems

---

## Real-life examples

1. Product list on e-commerce page  
Each product card is an element in an array.

2. Daily temperature history  
`temps[i]` gives temperature for day `i`.

3. Video timeline buffer  
Frames/chunks are processed in indexed order.

4. Student marks table  
Marks stored in a fixed order for quick index-based access.

5. Pixel row in image processing  
A row of pixels is naturally array-based.

---

## Q3: Implement array operations (TypeScript)
```ts
class DynamicArray<T> {
  private items: T[] = [];

  append(value: T): void { this.items.push(value); }
  get(index: number): T { return this.items[index]; }
  removeAt(index: number): T { return this.items.splice(index, 1)[0]; }
}
```

---

## Q4: Time complexity summary?
- Access by index: O(1)
- Search: O(n)
- Insert/remove at end: O(1) amortized
- Insert/remove in middle: O(n)

---

## Common interview questions

1. Two Sum using array?  
Expected: HashMap for complement lookup in `O(n)`.

2. Maximum subarray sum?  
Expected: Kadane's algorithm in `O(n)`.

3. Merge overlapping intervals?  
Expected: sort by start, then scan and merge.

4. Rotate array by `k` steps?  
Expected: reverse whole array, then reverse parts.

5. Find duplicate number efficiently?  
Expected: HashSet or in-place/index-based trick depending constraints.

6. Best time to buy/sell stock (single transaction)?  
Expected: track minimum so far and max profit while scanning.

7. Why are middle insertions in array expensive?  
Expected: elements must shift, giving `O(n)` cost.

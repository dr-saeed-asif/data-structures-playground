# Array Interview Questions

## Q1: What is an array?
An array is a linear data structure that stores elements in contiguous memory and supports direct index-based access.

## Q2: When should you use arrays?
Use arrays when you need fast reads by index, predictable iteration order, and compact storage.

## Q3: Implement array operations (TypeScript)
```ts
class DynamicArray<T> {
  private items: T[] = [];

  append(value: T): void { this.items.push(value); }
  get(index: number): T { return this.items[index]; }
  removeAt(index: number): T { return this.items.splice(index, 1)[0]; }
}
```

## Q4: Time complexity summary?
- Access by index: O(1)
- Search: O(n)
- Insert/remove at end: O(1) amortized
- Insert/remove in middle: O(n)

## Q5: Common interview mistakes?
- Ignoring out-of-range checks
- Forgetting shift cost for insert/remove in middle
- Confusing array with linked-list performance tradeoffs

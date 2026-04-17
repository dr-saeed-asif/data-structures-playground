import { DynamicArray } from "./array";

// Create a numeric dynamic array instance for demo operations.
const ds = new DynamicArray<number>();

// Add values at end.
ds.append(10);
ds.append(20);

// Add value at beginning.
ds.prepend(5);

// Insert value at index 1.
ds.insertAt(1, 7);

// Current state after all insertions.
console.log("toArray:", ds.toArray());

// Remove value at index 2 and print removed element.
console.log("removed:", ds.removeAt(2));

// Read value currently stored at index 1.
console.log("peek index 1:", ds.get(1));

// Print current number of elements.
console.log("size:", ds.size());

// Check whether array is empty.
console.log("isEmpty:", ds.isEmpty());

// Sorting example (ascending).
ds.sort((a, b) => a - b);
console.log("sorted:", ds.toArray());

// Filtering example.
console.log("filtered (> 6):", ds.filter((x) => x > 6));

// Searching examples.
console.log("find (> 10):", ds.find((x) => x > 10));
console.log("findIndex (= 20):", ds.findIndex((x) => x === 20));
console.log("search (= 7):", ds.search((x) => x === 7));

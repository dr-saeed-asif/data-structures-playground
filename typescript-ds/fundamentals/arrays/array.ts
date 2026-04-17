export class DynamicArray<T> {
  // Internal storage; methods expose controlled access around this array.
  private items: T[] = [];

  append(value: T): void {
    this.items.push(value);
  }

  prepend(value: T): void {
    this.items.unshift(value);
  }

  insertAt(index: number, value: T): void {
    // Allow insert at length (append position), but never outside valid range.
    if (index < 0 || index > this.items.length) {
      throw new RangeError("Index out of range");
    }
    this.items.splice(index, 0, value);
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    // splice returns an array; we return the single removed element.
    const [removed] = this.items.splice(index, 1);
    return removed;
  }

  get(index: number): T {
    // Read with explicit bounds check for predictable error behavior.
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    return this.items[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    // In-place update of existing index.
    this.items[index] = value;
  }

  indexOf(value: T): number {
    return this.items.indexOf(value);
  }

  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  // Sorts internal storage in place using provided comparator.
  sort(compareFn?: (a: T, b: T) => number): void {
    this.items.sort(compareFn);
  }

  // Returns a new array with items matching the predicate.
  filter(predicate: (value: T, index: number) => boolean): T[] {
    return this.items.filter(predicate);
  }

  // Returns the first item matching predicate, if any.
  find(predicate: (value: T, index: number) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  // Returns index of first item matching predicate, or -1.
  findIndex(predicate: (value: T, index: number) => boolean): number {
    return this.items.findIndex(predicate);
  }

  // Linear search with custom matcher.
  search(predicate: (value: T, index: number) => boolean): T | undefined {
    return this.find(predicate);
  }

  reverse(): void {
    // Mutates internal order in place.
    this.items.reverse();
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): T[] {
    // Return a copy so callers cannot mutate internal storage directly.
    return [...this.items];
  }
}

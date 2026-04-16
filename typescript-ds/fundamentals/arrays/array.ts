export class DynamicArray<T> {
  private items: T[] = [];

  append(value: T): void {
    this.items.push(value);
  }

  prepend(value: T): void {
    this.items.unshift(value);
  }

  insertAt(index: number, value: T): void {
    if (index < 0 || index > this.items.length) {
      throw new RangeError("Index out of range");
    }
    this.items.splice(index, 0, value);
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    const [removed] = this.items.splice(index, 1);
    return removed;
  }

  get(index: number): T {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    return this.items[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of range");
    }
    this.items[index] = value;
  }

  indexOf(value: T): number {
    return this.items.indexOf(value);
  }

  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  reverse(): void {
    this.items.reverse();
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): T[] {
    return [...this.items];
  }
}

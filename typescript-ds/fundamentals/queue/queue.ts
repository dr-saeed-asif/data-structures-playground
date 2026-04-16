export class Queue<T> {
  private items: T[] = [];

  add(value: T): void {
    this.items.push(value);
  }

  remove(): T | undefined {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

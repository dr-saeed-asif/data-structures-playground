# HashMap Interview Questions

## Q1: What is a HashMap?
A HashMap stores key-value pairs and uses a hash function to map keys to buckets.

Key idea:
- fast average-time insert, lookup, and delete
- no guaranteed ordering by default

---

## Q2: When to use HashMap?
Use HashMap when you need very fast key-based lookup.

Common scenarios:
- frequency counting
- caching/memoization
- deduplication
- index mapping (value -> position)

---

## Real-life examples

1. User session store  
`sessionId -> userData`

2. Product lookup table  
`productId -> productDetails`

3. Word frequency counter  
`word -> count`

4. API response cache  
`requestKey -> response`

---

## Q3: Implement HashMap using array
~~~ts
class SimpleHashMap {
  private buckets: [string, number][][] = Array.from({ length: 16 }, () => []);

  private hash(key: string): number {
    let h = 0;
    for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return h % this.buckets.length;
  }

  set(key: string, value: number): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    const pair = bucket.find(([k]) => k === key);
    if (pair) pair[1] = value;
    else bucket.push([key, value]);
  }

  get(key: string): number | undefined {
    const idx = this.hash(key);
    const pair = this.buckets[idx].find(([k]) => k === key);
    return pair?.[1];
  }

  delete(key: string): boolean {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    const i = bucket.findIndex(([k]) => k === key);
    if (i === -1) return false;
    bucket.splice(i, 1);
    return true;
  }
}
~~~

---

## Q4: Time complexity?
Average case:
- `set`: `O(1)`
- `get`: `O(1)`
- `delete`: `O(1)`

Worst case (heavy collisions):
- `O(n)` per operation

---

## Common interview questions

1. What is collision in HashMap?  
Expected: two keys map to same bucket index.

2. Collision handling techniques?  
Expected: chaining (linked list/array), open addressing.

3. Why can HashMap degrade to `O(n)`?  
Expected: poor hash distribution or adversarial keys.

4. HashMap vs TreeMap?  
Expected:
- HashMap: faster average lookup, unordered
- TreeMap: ordered keys, `O(log n)`

5. How to solve Two Sum in `O(n)`?  
Expected: use HashMap for complement lookup.

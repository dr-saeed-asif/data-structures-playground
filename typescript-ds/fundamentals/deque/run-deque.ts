import { Deque } from "./deque";

const ds = new Deque<number>();
ds.add(1);
ds.add(2);
ds.add(3);

console.log("peek:", ds.peek());
console.log("removed:", ds.remove());
console.log("size:", ds.size());

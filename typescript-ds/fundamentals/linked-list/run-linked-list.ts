import { LinkedList } from "./linked-list";

const ds = new LinkedList<number>();
ds.add(1);
ds.add(2);
ds.add(3);

console.log("peek:", ds.peek());
console.log("removed:", ds.remove());
console.log("size:", ds.size());

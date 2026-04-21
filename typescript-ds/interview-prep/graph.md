# Graph Interview Questions

## Q1: What is a Graph?
A graph is a data structure made of:
- vertices (nodes)
- edges (connections between nodes)

Graphs can be:
- directed or undirected
- weighted or unweighted
- cyclic or acyclic

---

## Q2: When to use Graph?
Use graphs when relationships are many-to-many and not strictly hierarchical.

Common scenarios:
- social networks (user follows user)
- maps/roads (city connections)
- dependency management (packages/services)
- recommendation systems (user-item relationships)

---

## Real-life examples

1. Google Maps / navigation  
Cities are nodes; roads with distance/time are weighted edges.

2. Social network  
Users are nodes; follow/friend relationships are edges.

3. Flight routes  
Airports are nodes; flight routes are directed edges.

4. Build systems  
Package dependencies form directed graphs.

5. Internet routing  
Routers are nodes; network links are edges.

---

## Q3: Implement Graph using adjacency list (TypeScript)
~~~ts
class Graph {
  private adj = new Map<string, string[]>();

  addVertex(v: string): void {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdge(u: string, v: string, undirected = true): void {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u)!.push(v);
    if (undirected) this.adj.get(v)!.push(u);
  }

  bfs(start: string): string[] {
    if (!this.adj.has(start)) return [];
    const visited = new Set<string>([start]);
    const queue: string[] = [start];
    const order: string[] = [];

    while (queue.length > 0) {
      const node = queue.shift()!;
      order.push(node);

      for (const nei of this.adj.get(node)!) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }
    return order;
  }
~~~

---

## Q4: Time complexity?
Using adjacency list (`V` = vertices, `E` = edges):

- Add vertex: `O(1)` average
- Add edge: `O(1)` average
- BFS: `O(V + E)`
- DFS: `O(V + E)`
- Space: `O(V + E)`

---

## Common interview questions

1. Difference between BFS and DFS?  
Expected:
- BFS explores level by level (queue)
- DFS explores depth first (stack/recursion)

2. How to detect cycle in undirected graph?  
Expected: DFS with parent tracking or Union-Find.

3. How to detect cycle in directed graph?  
Expected: DFS with recursion stack (coloring technique).

4. What is topological sort and when valid?  
Expected: ordering for DAG only; use Kahn's BFS or DFS postorder.

5. Shortest path algorithms?  
Expected:
- Unweighted graph: BFS
- Weighted non-negative: Dijkstra
- With negative edges: Bellman-Ford

6. How to count connected components?  
Expected: run DFS/BFS from each unvisited vertex.

7. What is adjacency list vs adjacency matrix tradeoff?  
Expected:
- list: memory efficient for sparse graphs
- matrix: fast edge lookup `O(1)`, but `O(V^2)` space

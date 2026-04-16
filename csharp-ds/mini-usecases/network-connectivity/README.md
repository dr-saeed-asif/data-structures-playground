# Network Connectivity (C#)

Implemented file: `Program.cs`

## Implemented items
- Class `UnionFind`

## How the code works
- `Find(int x)`: returns representative parent with path compression.
- `Union(int a, int b)`: merges two sets using rank/height logic.
- `Connected(int a, int b)`: checks whether two nodes share the same representative.

# Folder Index (TypeScript)

Implemented file: `folder-index.ts`

## Implemented items
- Type `FolderNode`
- Class `FolderIndex`

## Purpose
`FolderIndex` stores folder paths in a tree structure so common path prefixes are shared.

Example:
- `/docs/api/v1`
- `/docs/api/v2`

Both paths share `docs -> api`, so those nodes are stored once.

## Data model

### `FolderNode`
Each node represents one folder segment:
- `name`: folder name at this level (`"docs"`, `"api"`, etc.)
- `children`: `Map<string, FolderNode>` where:
  - key = child folder name
  - value = child node

`Map` makes child lookup fast when traversing path segments.

### `root` node
`FolderIndex` starts with:
- `root = { name: "/", children: new Map() }`

The root is a virtual starting point for all absolute-like paths.

## Method-by-method explanation

### `addPath(path: string): void`
Adds a full path into the tree.

Flow:
1. Normalize path into segments with `normalize(path)`.
   - `"/docs/api/v1"` -> `["docs", "api", "v1"]`
2. Start traversal at `root`.
3. For each segment:
   - If current node does not already have that child, create it.
   - Move `current` to that child.
4. When loop ends, the full path exists in the tree.

Important behavior:
- Existing segments are reused.
- Only missing nodes are created.

---

### `exists(path: string): boolean`
Checks if a path exists exactly in the tree.

Implementation:
- Calls `getNode(path)`.
- Returns `true` if a node is found, otherwise `false`.

Examples:
- If `"/docs/api"` was inserted, `exists("/docs/api")` is `true`.
- If `"/docs/dev"` was never inserted, `exists("/docs/dev")` is `false`.

---

### `list(path = "/"): string[]`
Returns sorted immediate child folder names for a given path.

Flow:
1. Resolve target node with `getNode(path)`.
2. If not found, return `[]`.
3. Read child names from `node.children.keys()`.
4. Convert to array and sort alphabetically.

Example:
- If children under `"/docs"` are `["api", "guide"]`, output is `["api", "guide"]`.

---

### `getNode(path: string): FolderNode | undefined` (private)
Internal traversal helper to find the node at a path.

Flow:
1. Normalize path to segments.
2. Start at `root`.
3. For each segment:
   - Try `current.children.get(segment)`.
   - If missing, return `undefined`.
   - Else continue traversal.
4. Return final node when all segments are matched.

Used by:
- `exists()` for path presence checks
- `list()` for listing children at a path

---

### `normalize(path: string): string[]` (private)
Converts a raw path string into clean segments:
- Splits by `"/"`
- Removes empty segments

So these behave similarly:
- `"/docs/api"`
- `"docs/api"`
- `"//docs///api/"`

All normalize to:
- `["docs", "api"]`

## Time complexity
- Let `k` = number of segments in the input path.
- `addPath(path)`: `O(k)` average
- `exists(path)`: `O(k)` average
- `list(path)`: `O(k + m log m)` where `m` is number of children at that node (sorting step)

## Quick usage example
```ts
const index = new FolderIndex();

index.addPath("/docs/api/v1");
index.addPath("/docs/api/v2");
index.addPath("/docs/guide");

console.log(index.exists("/docs/api")); // true
console.log(index.exists("/docs/dev")); // false
console.log(index.list("/docs"));       // ["api", "guide"]
```

# Folder Index (C#)

Implemented file: `Program.cs`

## Implemented items
- Class `FolderNode`
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
- `Name`: folder name at this level (`"docs"`, `"api"`, etc.)
- `Children`: `Dictionary<string, FolderNode>` where:
  - key = child folder name
  - value = child node

`Dictionary` makes child lookup fast when traversing path segments.

### `_root` node
`FolderIndex` starts with:
- `_root = new FolderNode("/")`

The root is a virtual starting point for all absolute-like paths.

## Method-by-method explanation

### `AddPath(string path)`
Adds a full path into the tree.

Flow:
1. Normalize path into segments with `Normalize(path)`.
   - `"/docs/api/v1"` -> `["docs", "api", "v1"]`
2. Start traversal at `_root`.
3. For each segment:
   - If current node does not already have that child, create it.
   - Move `current` to that child.
4. When loop ends, the full path exists in the tree.

Important behavior:
- Existing segments are reused.
- Only missing nodes are created.

---

### `Exists(string path)`
Checks if a path exists exactly in the tree.

Implementation:
- Calls `GetNode(path)`.
- Returns `true` if a node is found, otherwise `false`.

Examples:
- If `"/docs/api"` was inserted, `Exists("/docs/api")` is `true`.
- If `"/docs/dev"` was never inserted, `Exists("/docs/dev")` is `false`.

---

### `List(string path = "/")`
Returns sorted immediate child folder names for a given path.

Flow:
1. Resolve target node with `GetNode(path)`.
2. If not found, return an empty list.
3. Read child names from `node.Children.Keys`.
4. Sort alphabetically with LINQ and return.

Example:
- If children under `"/docs"` are `["api", "guide"]`, output is `["api", "guide"]`.

---

### `GetNode(string path)` (private)
Internal traversal helper to find the node at a path.

Flow:
1. Normalize path to segments.
2. Start at `_root`.
3. For each segment:
   - Try `current.Children.TryGetValue(segment, out child)`.
   - If missing, return `null`.
   - Else continue traversal.
4. Return final node when all segments are matched.

Used by:
- `Exists()` for path presence checks
- `List()` for listing children at a path

---

### `Normalize(string path)` (private static)
Converts a raw path string into clean segments:
- Splits by `"/"`
- Removes empty or whitespace-only segments

So these behave similarly:
- `"/docs/api"`
- `"docs/api"`
- `"//docs///api/"`

All normalize to:
- `["docs", "api"]`

## Time complexity
- Let `k` = number of segments in the input path.
- `AddPath(path)`: `O(k)` average
- `Exists(path)`: `O(k)` average
- `List(path)`: `O(k + m log m)` where `m` is number of children at that node (sorting step)

## Quick usage example
```csharp
var index = new FolderIndex();

index.AddPath("/docs/api/v1");
index.AddPath("/docs/api/v2");
index.AddPath("/docs/guide");

Console.WriteLine(index.Exists("/docs/api")); // True
Console.WriteLine(index.Exists("/docs/dev")); // False
Console.WriteLine(string.Join(", ", index.List("/docs"))); // api, guide
```

# Arrays (C#)

Implemented file: `Program.cs`

## Implemented items
- Class `DynamicArray`

## How the code works
- `Append(T value)`: adds one item at the end of internal storage.
- `Prepend(T value)`: adds one item at the beginning of internal storage.
- `InsertAt(int index, T value)`: inserts an item at a specific index after range validation.
- `RemoveAt(int index)`: removes and returns item at a specific index after range validation.
- `Get(int index)`: returns the item at a specific index.
- `Set(int index, T value)`: overwrites the item at a specific index.
- `IndexOf(T value)`: returns the first matching index or -1 when not found.
- `Contains(T value)`: returns whether the value exists.
- `Reverse()`: reverses internal storage in place.
- `Size()`: returns the current number of stored items.
- `IsEmpty()`: returns true when there are no stored items.
- `ToArray()`: returns a copy/read-only view of stored items.

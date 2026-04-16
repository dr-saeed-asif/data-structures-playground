# Arrays (TypeScript)

Implemented file: `array.ts`

## Implemented items
- Class `DynamicArray`

## How the code works
- `append()`: adds one item at the end of internal storage.
- `prepend()`: adds one item at the beginning of internal storage.
- `insertAt()`: inserts an item at a specific index after range validation.
- `removeAt()`: removes and returns item at a specific index after range validation.
- `get()`: returns the item at a specific index.
- `set()`: overwrites the item at a specific index.
- `indexOf()`: returns the first matching index or -1 when not found.
- `contains()`: returns whether the value exists.
- `reverse()`: reverses internal storage in place.
- `size()`: returns the current number of stored items.
- `isEmpty()`: returns true when there are no stored items.
- `toArray()`: returns a copy/read-only view of stored items.

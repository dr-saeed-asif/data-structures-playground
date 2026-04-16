# Undo Redo (TypeScript)

Implemented file: `undo-redo.ts`

## Implemented items
- Class `UndoRedoManager`

## How the code works
- `do()`: pushes a new action and clears redo history.
- `undo()`: moves latest action from undo stack to redo stack.
- `redo()`: moves latest action from redo stack back to undo stack.

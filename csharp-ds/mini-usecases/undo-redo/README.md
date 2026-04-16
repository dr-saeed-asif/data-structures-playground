# Undo Redo (C#)

Implemented file: `Program.cs`

## Implemented items
- Class `UndoRedoManager`

## How the code works
- `Do(T action)`: pushes a new action and clears redo history.
- `Undo()`: moves latest action from undo stack to redo stack.
- `Redo()`: moves latest action from redo stack back to undo stack.

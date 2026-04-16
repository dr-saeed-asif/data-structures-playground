export class UndoRedoManager<T> {
  private undoStack: T[] = [];
  private redoStack: T[] = [];

  do(action: T): void {
    this.undoStack.push(action);
    this.redoStack = [];
  }

  undo(): T | undefined {
    const action = this.undoStack.pop();
    if (action !== undefined) this.redoStack.push(action);
    return action;
  }

  redo(): T | undefined {
    const action = this.redoStack.pop();
    if (action !== undefined) this.undoStack.push(action);
    return action;
  }
}

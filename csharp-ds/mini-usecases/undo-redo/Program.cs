using System.Collections.Generic;

public class UndoRedoManager<T>
{
    private readonly Stack<T> _undoStack = new();
    private readonly Stack<T> _redoStack = new();

    public void Do(T action)
    {
        _undoStack.Push(action);
        _redoStack.Clear();
    }

    public T? Undo()
    {
        if (_undoStack.Count == 0) return default;
        var action = _undoStack.Pop();
        _redoStack.Push(action);
        return action;
    }

    public T? Redo()
    {
        if (_redoStack.Count == 0) return default;
        var action = _redoStack.Pop();
        _undoStack.Push(action);
        return action;
    }
}

using System.Collections.Generic;

public class <T>
{
    private readonly List<T> _items = new();

    public void Add(T value)
    {
        _items.Add(value);
    }

    public T? Remove()
    {
        if (_items.Count == 0) return default;

        var lastIndex = _items.Count - 1;
        var value = _items[lastIndex];
        _items.RemoveAt(lastIndex);
        return value;
    }

    public int Size()
    {
        return _items.Count;
    }

    public T? Peek()
    {
        return _items.Count == 0 ? default : _items[_items.Count - 1];
    }
}

using System;
using System.Collections.Generic;

public class DynamicArray<T>
{
    private readonly List<T> _items = new();

    public void Append(T value) => _items.Add(value);

    public void Prepend(T value) => _items.Insert(0, value);

    public void InsertAt(int index, T value)
    {
        if (index < 0 || index > _items.Count) throw new ArgumentOutOfRangeException(nameof(index));
        _items.Insert(index, value);
    }

    public T RemoveAt(int index)
    {
        if (index < 0 || index >= _items.Count) throw new ArgumentOutOfRangeException(nameof(index));
        var value = _items[index];
        _items.RemoveAt(index);
        return value;
    }

    public T Get(int index)
    {
        if (index < 0 || index >= _items.Count) throw new ArgumentOutOfRangeException(nameof(index));
        return _items[index];
    }

    public void Set(int index, T value)
    {
        if (index < 0 || index >= _items.Count) throw new ArgumentOutOfRangeException(nameof(index));
        _items[index] = value;
    }

    public int IndexOf(T value) => _items.IndexOf(value);

    public bool Contains(T value) => _items.Contains(value);

    public void Reverse() => _items.Reverse();

    public int Size() => _items.Count;

    public bool IsEmpty() => _items.Count == 0;

    public IReadOnlyList<T> ToArray() => _items.AsReadOnly();
}

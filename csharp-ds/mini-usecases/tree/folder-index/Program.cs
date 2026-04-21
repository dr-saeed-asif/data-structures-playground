using System.Collections.Generic;
using System.Linq;

public class FolderNode
{
    public string Name { get; }
    public Dictionary<string, FolderNode> Children { get; } = new();

    public FolderNode(string name)
    {
        Name = name;
    }
}

public class FolderIndex
{
    private readonly FolderNode _root = new("/");

    public void AddPath(string path)
    {
        var segments = Normalize(path);
        var current = _root;

        foreach (var segment in segments)
        {
            if (!current.Children.TryGetValue(segment, out var child))
            {
                child = new FolderNode(segment);
                current.Children[segment] = child;
            }

            current = child;
        }
    }

    public bool Exists(string path)
    {
        return GetNode(path) != null;
    }

    public List<string> List(string path = "/")
    {
        var node = GetNode(path);
        if (node == null) return new List<string>();
        return node.Children.Keys.OrderBy(x => x).ToList();
    }

    private FolderNode? GetNode(string path)
    {
        var segments = Normalize(path);
        var current = _root;

        foreach (var segment in segments)
        {
            if (!current.Children.TryGetValue(segment, out var child))
            {
                return null;
            }

            current = child;
        }

        return current;
    }

    private static List<string> Normalize(string path)
    {
        return path
            .Split('/')
            .Where(segment => !string.IsNullOrWhiteSpace(segment))
            .ToList();
    }
}

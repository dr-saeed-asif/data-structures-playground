using System.Collections.Generic;

public static class DuplicateRemover
{
    public static List<T> RemoveDuplicates<T>(List<T> items)
    {
        var seen = new HashSet<T>();
        var result = new List<T>();
        foreach (var item in items)
        {
            if (seen.Add(item)) result.Add(item);
        }

        return result;
    }
}

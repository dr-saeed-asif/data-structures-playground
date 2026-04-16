using System.Collections.Generic;
using System.Linq;

public static class Autocomplete
{
    public static List<string> Search(List<string> dictionary, string prefix)
    {
        var p = prefix.ToLowerInvariant();
        return dictionary
            .Where(w => w.ToLowerInvariant().StartsWith(p))
            .OrderBy(w => w)
            .ToList();
    }
}

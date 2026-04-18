using System.Collections.Generic;
using System.Linq;

public static class SearchEngine
{
    public static List<string> SearchDocuments(List<string> docs, string query)
    {
        var q = query.ToLowerInvariant();
        return docs.Where(d => d.ToLowerInvariant().Contains(q)).ToList();
    }
}

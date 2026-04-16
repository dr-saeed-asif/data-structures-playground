using System;
using System.Collections.Generic;
using System.Linq;

public record ProductView(string ProductId, long Timestamp);

public static class Program
{
    public static List<string> TopTrendingProducts(List<ProductView> events, int topN)
    {
        return events
            .GroupBy(e => e.ProductId)
            .Select(g => new { ProductId = g.Key, Count = g.Count() })
            .OrderByDescending(x => x.Count)
            .ThenBy(x => x.ProductId)
            .Take(Math.Max(0, topN))
            .Select(x => x.ProductId)
            .ToList();
    }
}

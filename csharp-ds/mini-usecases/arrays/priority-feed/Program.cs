using System.Collections.Generic;
using System.Linq;

public record FeedItem(string Id, double Score);

public static class PriorityFeed
{
    public static List<FeedItem> BuildPriorityFeed(List<FeedItem> items, int limit)
    {
        return items
            .OrderByDescending(i => i.Score)
            .ThenBy(i => i.Id)
            .Take(System.Math.Max(0, limit))
            .ToList();
    }
}

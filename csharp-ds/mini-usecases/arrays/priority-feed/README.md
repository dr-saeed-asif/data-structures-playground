# Priority Feed (C#)

Implemented file: `Program.cs`

## Implemented items
- Record `FeedItem(string Id, double Score)`
- Class `PriorityFeed`

## How the code works
- `BuildPriorityFeed(List<FeedItem> items, int limit)`: sorts items by score descending then id and returns limited list.

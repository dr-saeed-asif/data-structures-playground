# Priority Feed (TypeScript)

Implemented file: `priority-feed.ts`

## Implemented items
- Type `FeedItem` = `{ id: string; score: number };`
- Function `buildPriorityFeed(items: FeedItem[], limit: number)`

## How the code works
- `buildPriorityFeed()`: sorts feed items by score descending, then id, and returns the requested limit.

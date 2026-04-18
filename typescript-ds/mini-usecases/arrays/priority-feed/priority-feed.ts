export type FeedItem = { id: string; score: number };

export function buildPriorityFeed(items: FeedItem[], limit: number): FeedItem[] {
  return [...items]
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, Math.max(0, limit));
}

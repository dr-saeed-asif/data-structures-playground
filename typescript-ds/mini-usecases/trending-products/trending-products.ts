export type ProductView = { productId: string; timestamp: number };

export function topTrendingProducts(events: ProductView[], topN: number): string[] {
  const counts = new Map<string, number>();
  for (const event of events) {
    counts.set(event.productId, (counts.get(event.productId) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, Math.max(0, topN))
    .map(([id]) => id);
}

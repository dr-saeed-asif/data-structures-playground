# Trending Products (TypeScript)

Implemented file: `trending-products.ts`

## Implemented items
- Type `ProductView` = `{ productId: string; timestamp: number };`
- Function `topTrendingProducts(events: ProductView[], topN: number)`

## How the code works
- `topTrendingProducts()`: counts product ids, sorts by count desc then id, and returns top N ids.

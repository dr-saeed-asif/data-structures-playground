# Trending Products (C#)

Implemented file: `Program.cs`

## Implemented items
- Record `ProductView(string ProductId, long Timestamp)`
- Class `Program`

## How the code works
- `TopTrendingProducts(List<ProductView> events, int topN)`: groups events by product id, sorts by count and id, and returns top N ids.

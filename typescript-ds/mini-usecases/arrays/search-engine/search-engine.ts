export function searchDocuments(docs: string[], query: string): string[] {
  const q = query.toLowerCase();
  return docs.filter((doc) => doc.toLowerCase().includes(q));
}

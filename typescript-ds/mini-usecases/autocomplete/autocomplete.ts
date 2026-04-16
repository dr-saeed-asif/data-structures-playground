export function autocomplete(dictionary: string[], prefix: string): string[] {
  const p = prefix.toLowerCase();
  return dictionary.filter((w) => w.toLowerCase().startsWith(p)).sort();
}

# Trie Interview Questions

## Q1: What is a Trie?
A Trie (prefix tree) is a tree where each edge represents a character.
It is optimized for string prefix operations like:
- checking if a word exists
- checking if any word starts with a prefix
- autocomplete suggestions

---

## Q2: When to use Trie?
Use Trie when you do many string prefix queries.

Common scenarios:
- autocomplete/search suggestions
- dictionary word lookup
- spell checkers
- IP routing prefix matching

---

## Real-life examples

1. Search autocomplete  
Typing `ca` suggests `car`, `care`, `camera`.

2. Contacts app search  
Typing a prefix quickly lists matching names.

3. Browser URL suggestions  
Find frequently visited URLs by typed prefix.

4. Code editor symbol search  
Suggest symbols/functions by prefix.

5. Spam keyword filtering  
Store suspicious terms for fast matching.

---

## Q3: Implement Trie using array
~~~ts
type TrieNode = {
  children: Map<string, TrieNode>;
  isWord: boolean;
};

class Trie {
  private root: TrieNode = { children: new Map(), isWord: false };

  insert(word: string): void {
    let cur = this.root;
    for (const ch of word) {
      if (!cur.children.has(ch)) {
        cur.children.set(ch, { children: new Map(), isWord: false });
      }
      cur = cur.children.get(ch)!;
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    const node = this.walk(word);
    return !!node && node.isWord;
  }

  startsWith(prefix: string): boolean {
    return !!this.walk(prefix);
  }

  private walk(s: string): TrieNode | undefined {
    let cur = this.root;
    for (const ch of s) {
      const next = cur.children.get(ch);
      if (!next) return undefined;
      cur = next;
    }
    return cur;
  }
}
~~~

---

## Q4: Time complexity?
Let `L` = length of input word/prefix.

- Insert: `O(L)`
- Search: `O(L)`
- StartsWith: `O(L)`
- Space: up to `O(total characters inserted)`

---

## Common interview questions

1. Trie vs HashMap for dictionary lookup?  
Expected: Trie is better for prefix operations; HashMap is good for exact lookup only.

2. How to implement autocomplete using Trie?  
Expected: walk to prefix node, then DFS children to collect words.

3. How to delete a word in Trie?  
Expected: unmark terminal node and prune unused nodes during backtracking.

4. Why can Trie consume a lot of memory?  
Expected: many nodes/pointers; optimize with compressed trie/radix tree.

5. Time complexity of Trie operations?  
Expected: based on word length (`L`), not number of words (`N`) for core operations.

6. How do you support case-insensitive search?  
Expected: normalize input (e.g., lowercase) before insert/search.

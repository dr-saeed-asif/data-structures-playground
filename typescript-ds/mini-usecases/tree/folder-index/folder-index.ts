type FolderNode = {
  name: string;
  children: Map<string, FolderNode>;
};

export class FolderIndex {
  private readonly root: FolderNode = { name: "/", children: new Map() };

  addPath(path: string): void {
    const segments = this.normalize(path);
    let current = this.root;

    for (const segment of segments) {
      if (!current.children.has(segment)) {
        current.children.set(segment, { name: segment, children: new Map() });
      }
      current = current.children.get(segment)!;
    }
  }

  exists(path: string): boolean {
    return this.getNode(path) !== undefined;
  }

  list(path = "/"): string[] {
    const node = this.getNode(path);
    if (!node) return [];
    return Array.from(node.children.keys()).sort();
  }

  private getNode(path: string): FolderNode | undefined {
    const segments = this.normalize(path);
    let current = this.root;

    for (const segment of segments) {
      const next = current.children.get(segment);
      if (!next) return undefined;
      current = next;
    }
    return current;
  }

  private normalize(path: string): string[] {
    return path.split("/").filter((segment) => segment.length > 0);
  }
}

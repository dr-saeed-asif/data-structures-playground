export class SocialNetwork {
  private adjacency = new Map<string, Set<string>>();

  addUser(user: string): void {
    if (!this.adjacency.has(user)) this.adjacency.set(user, new Set());
  }

  follow(from: string, to: string): void {
    this.addUser(from);
    this.addUser(to);
    this.adjacency.get(from)?.add(to);
  }

  getFollowing(user: string): string[] {
    return [...(this.adjacency.get(user) ?? new Set())];
  }
}

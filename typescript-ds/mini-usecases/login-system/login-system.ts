export class LoginSystem {
  private activeSessions = new Set<string>();

  login(userId: string): void {
    this.activeSessions.add(userId);
  }

  logout(userId: string): void {
    this.activeSessions.delete(userId);
  }

  isLoggedIn(userId: string): boolean {
    return this.activeSessions.has(userId);
  }

  activeCount(): number {
    return this.activeSessions.size;
  }
}

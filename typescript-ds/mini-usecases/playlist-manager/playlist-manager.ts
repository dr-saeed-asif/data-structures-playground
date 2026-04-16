export class PlaylistManager {
  private songs: string[] = [];

  add(song: string): void {
    this.songs.push(song);
  }

  remove(song: string): boolean {
    const i = this.songs.indexOf(song);
    if (i === -1) return false;
    this.songs.splice(i, 1);
    return true;
  }

  move(from: number, to: number): void {
    if (from < 0 || from >= this.songs.length || to < 0 || to >= this.songs.length) return;
    const [song] = this.songs.splice(from, 1);
    this.songs.splice(to, 0, song);
  }

  list(): string[] {
    return [...this.songs];
  }
}

using System.Collections.Generic;

public class PlaylistManager
{
    private readonly List<string> _songs = new();

    public void Add(string song) => _songs.Add(song);

    public bool Remove(string song) => _songs.Remove(song);

    public void Move(int from, int to)
    {
        if (from < 0 || from >= _songs.Count || to < 0 || to >= _songs.Count) return;
        var song = _songs[from];
        _songs.RemoveAt(from);
        _songs.Insert(to, song);
    }

    public List<string> List() => new(_songs);
}

using System.Collections.Generic;
using System.Linq;

public class SocialNetwork
{
    private readonly Dictionary<string, HashSet<string>> _adjacency = new();

    public void AddUser(string user)
    {
        if (!_adjacency.ContainsKey(user)) _adjacency[user] = new HashSet<string>();
    }

    public void Follow(string from, string to)
    {
        AddUser(from);
        AddUser(to);
        _adjacency[from].Add(to);
    }

    public List<string> GetFollowing(string user)
    {
        if (!_adjacency.ContainsKey(user)) return new List<string>();
        return _adjacency[user].ToList();
    }
}

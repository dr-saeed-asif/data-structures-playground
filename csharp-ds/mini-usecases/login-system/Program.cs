using System.Collections.Generic;

public class LoginSystem
{
    private readonly HashSet<string> _activeSessions = new();

    public void Login(string userId) => _activeSessions.Add(userId);

    public void Logout(string userId) => _activeSessions.Remove(userId);

    public bool IsLoggedIn(string userId) => _activeSessions.Contains(userId);

    public int ActiveCount() => _activeSessions.Count;
}

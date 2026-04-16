using System.Collections.Generic;
using System.Linq;

public record TaskItem(string Id, int Priority);

public class TaskScheduler
{
    private readonly List<TaskItem> _queue = new();

    public void AddTask(TaskItem task) => _queue.Add(task);

    public TaskItem? NextTask()
    {
        if (_queue.Count == 0) return null;
        var next = _queue.OrderByDescending(t => t.Priority).ThenBy(t => t.Id).First();
        _queue.Remove(next);
        return next;
    }
}

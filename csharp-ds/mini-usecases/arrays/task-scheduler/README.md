# Task Scheduler (C#)

Implemented file: `Program.cs`

## Implemented items
- Record `TaskItem(string Id, int Priority)`
- Class `TaskScheduler`

## How the code works
- `AddTask(TaskItem task)`: stores a task in scheduler list.
- `NextTask()`: returns highest-priority task and removes it from queue.

# Task Scheduler (TypeScript)

Implemented file: `task-scheduler.ts`

## Implemented items
- Type `Task` = `{ id: string; priority: number };`
- Class `TaskScheduler`

## How the code works
- `addTask()`: stores a task in scheduler list.
- `nextTask()`: returns highest-priority task and removes it from queue.

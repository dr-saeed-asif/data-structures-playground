export type Task = { id: string; priority: number };

export class TaskScheduler {
  private queue: Task[] = [];

  addTask(task: Task): void {
    this.queue.push(task);
  }

  nextTask(): Task | undefined {
    if (this.queue.length === 0) return undefined;
    this.queue.sort((a, b) => b.priority - a.priority || a.id.localeCompare(b.id));
    return this.queue.shift();
  }
}

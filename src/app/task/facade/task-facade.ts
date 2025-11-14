import { Injectable } from '@angular/core';
import { TaskType } from '../task.type';
import { NewTaskModel } from '../new-task/new-task.model';
import { DUMMY_TASK } from '../task-list/dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {

  private tasks: TaskType[] = DUMMY_TASK;

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } 
  }

  getTask(userId: string): TaskType[] {
      return this.tasks.filter(task => task.userId === userId);
  }

  addTask(userId: string, newTask: NewTaskModel): void {
      this.tasks.unshift({id: Math.random().toString(), userId: userId, title: newTask.title, summary: newTask.summary, dueDate: new Date()});
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  completeTask(taskId: string): void {
      this.tasks = this.tasks.filter(task => task.id != taskId);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}

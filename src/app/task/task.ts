import { Component, input, signal, computed, Output } from '@angular/core';
import { DUMMY_TASK } from './task-list/dummy-tasks';
import { TaskList } from './task-list/task-list';
import { TaskType } from '../task/task.type';
import { UserType } from '../user/user.type';


@Component({
  selector: 'app-task',
  imports: [TaskList],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  user = input.required<UserType>();
  readonly tasks = signal<TaskType[]>(DUMMY_TASK);
  readonly taskCompleted = signal<string>('');

  addTask() {
    alert(`Task added for ${this.user?.name ?? 'unknown user'}`);
  }

  getTasks() {
    return this.tasks().filter(task => task.userId === this.user().id);
  }
  
}

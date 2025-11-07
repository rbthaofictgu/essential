import { Component, input, signal, computed, Output } from '@angular/core';
import { DUMMY_TASK } from './task-list/dummy-tasks';
import { TaskList } from './task-list/task-list';
import { TaskType } from '../task/task.type';
import { UserType } from '../user/user.type';
import { NewTask } from "./new-task/new-task";


@Component({
  selector: 'app-task',
  imports: [TaskList, NewTask],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  user = input.required<UserType>();
  readonly tasks = signal<TaskType[]>(DUMMY_TASK);
  isAddingTask = false;

  onStartTask() {
    this.isAddingTask =true;
  }

  onCancelAddTask() {
    this.isAddingTask =false;
  }

  getTasks() {
    return this.tasks().filter(task => task.userId === this.user().id);
  }

  onTaskCompleted(taskId: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

}

import { Component, inject, input } from '@angular/core';
import { Card } from "../shared/card/card";
import { UserType } from '../user/user.type';
import { TaskFacade } from './facade/task-facade';
import { NewTask } from "./new-task/new-task";
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-task',
  imports: [TaskList, NewTask, Card],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  private readonly TaskFacade = inject(TaskFacade);
  user = input.required<UserType>();
  isAddingTask = false;

  onStartTask() {
    this.isAddingTask =true;
  }

  onCloseAddTask() {
    this.isAddingTask =false;
  }

  getTasks() {
    return this.TaskFacade.getTask(this.user().id);
  }

  onTaskCompleted(taskId: string) {
    this.TaskFacade.completeTask(taskId);
  }

}

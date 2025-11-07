import { Component, Input, Output,EventEmitter } from '@angular/core';
import { TaskType } from '../../task/task.type';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})

export class TaskList {
 @Input() task!: TaskType;
 @Output() completeTask = new EventEmitter<string>();

 setTaskCompleted() { 
    this.completeTask.emit(this.task.id ?? '');
 }

}

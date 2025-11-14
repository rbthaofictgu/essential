import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskType } from '../../task/task.type';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
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

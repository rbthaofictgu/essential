import { Component, EventEmitter, inject, input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskFacade } from '../facade/task-facade';
import { NewTaskModel } from '../new-task/new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @ViewChild('newTaskForm') form?: NgForm;
  private readonly TaskFacade = inject(TaskFacade);
  userID = input.required<string>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onSubmit() {
    if (this.form?.valid) {
      const NewTaskModel: NewTaskModel = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      };
      this.TaskFacade.addTask(this.userID(),NewTaskModel);
      this.close.emit();
    }  
  }

  onClose() {
    this.close.emit();
  }

}


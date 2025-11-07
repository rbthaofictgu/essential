import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @ViewChild('newTaskForm') form?: NgForm;
  @Output() addingTask = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.addingTask.emit();
  }
}


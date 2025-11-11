import { Component, EventEmitter, Output, signal, ViewChild, input } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { DUMMY_TASK } from '../task-list/dummy-tasks';
import { NewTaskModel } from '../new-task/new-task.model';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @ViewChild('newTaskForm') form?: NgForm;
  @Output() addingTask = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<NewTaskModel>(); // ← emitimos el task
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onSubmit() {
    if (this.form?.valid) {
      const NewTaskModel: NewTaskModel = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      };
      this.taskCreated.emit(NewTaskModel);
    }  
  }

  onCancel() {
    this.addingTask.emit();
  }
}


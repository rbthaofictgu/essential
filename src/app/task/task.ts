import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;

}

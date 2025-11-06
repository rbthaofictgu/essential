import { Component,Input } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [NgOptimizedImage],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) id?: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;

}

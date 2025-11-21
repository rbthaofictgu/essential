import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = signal('My Angular App');
}
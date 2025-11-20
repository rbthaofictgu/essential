import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = signal('My Angular App');
}
import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';
import { UserType } from './user/user.types';

@Component({
  selector: 'app-root',
  imports: [Header,User,NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // Ruta base de las imÃ¡genes de usuario
  readonly path = 'users/';
  //** Fuente de datos  */
  readonly users = signal<UserType[]>(
    DUMMY_USERS.map(u => ({
      ...u,
      longAvatarUrl: u.avatarUrl ? this.path + u.avatarUrl : ''
    }))
  );
  // Signal con valor inicial = users[0] (si la lista viniera vacÃ­a queda undefined)
  readonly selectedUser = signal<UserType | undefined>(this.users()[0]);
  constructor() {    
    // (Opcional) Persistencia en localStorage
    const storedUserId = localStorage.getItem('selectedUser');
    if (storedUserId) {
      this.onSelectUser(storedUserId);
    }
  }
  // Acciones
  onSelectUser(id: string) {
    this.selectedUser.set(this.users().find(u => u.id === id));
  }

}

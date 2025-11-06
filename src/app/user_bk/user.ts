import { Component,signal, effect } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { UserType } from './user.types';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
  // Ruta base de las imágenes de usuario
  readonly path = 'users/';
  //** Fuente de datos  */
  readonly users = signal<UserType[]>(
    DUMMY_USERS.map(u => ({
      ...u,
      longAvatarUrl: u.avatarUrl ? this.path + u.avatarUrl : undefined
    }))
  );
  // Signal con valor inicial = users[0] (si la lista viniera vacía queda undefined)
  readonly selectedUser = signal<UserType | undefined>(this.users()[0]);

  constructor() {    
    // (Opcional) Persistencia en localStorage
    const storedUserId = localStorage.getItem('selectedUser');
    if (storedUserId) {
      const foundUser = this.users().find(u => u.id === storedUserId);
      if (foundUser) {
        this.selectedUser.set(foundUser);
      }
    }

    effect(() => {
      localStorage.setItem('selectedUser', this.selectedUser()?.id ?? '');
    });  

  }

  // Acciones
  selectUser(user: UserType) {
    this.selectedUser.set(user);
  }

  // Azúcar para la UI
  isSelected(id: string) {
    console.log(this.selectedUser()?.longAvatarUrl,'longAvatarUrl');
    return this.selectedUser()?.id === id;
  }
  
}
import { PLATFORM_ID,Component, OnInit, Input, Output, EventEmitter,signal, inject } from '@angular/core';
import { isPlatformBrowser,NgOptimizedImage} from '@angular/common';
import { UserType } from './user.type';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User implements OnInit  {
  @Input({required: true}) userEnt!: UserType;
  @Input({required: true}) selected!: boolean;
  @Input({required: true}) i: number = 0;
  @Output() selectedUser = new EventEmitter<string>();
  platformId = inject(PLATFORM_ID);
  storedUserId: string = '';

  ngOnInit() {
    // AquÃ­ this.id ya tiene el valor asignado desde el componente padre
    if (isPlatformBrowser(this.platformId)) {
      const storedUserId = localStorage.getItem('selectedUser');
      if (storedUserId === this.userEnt.id) {
        this.selected=true;
      }
    }
  }

  onTaskComplete(id: string) {
    console.log(`Task ${id} completed for user ${this.userEnt.name}`);
  }
  // Acciones
  onSelectedUser() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedUser', this.userEnt.id ?? '');
    }
    this.selected=true;
    this.selectedUser.emit(this.userEnt.id ?? '');
  }

}
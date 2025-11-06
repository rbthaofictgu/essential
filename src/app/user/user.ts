import { PLATFORM_ID,Component, OnInit, Input, Output, EventEmitter,signal, inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User implements OnInit  {

  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;
  @Output() selectedUser = new EventEmitter<string>;
  selected = signal<boolean>(false);
  platformId = inject(PLATFORM_ID);

  storedUserId: string | '' = '';

  ngOnInit() {
    // Aquí this.id ya tiene el valor asignado desde el componente padre
    if (isPlatformBrowser(this.platformId)) {
      const storedUserId = localStorage.getItem('selectedUser');
      if (storedUserId === this.id) {
        this.selected.set(true);
      }
    }
  }

  // Acciones
  onSelectedUser() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedUser', this.id ?? '');
    }
    this.selectedUser.emit(this.id);
  }

  isSelected() {
    return this.selected();
  }
  
}
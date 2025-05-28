import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mobile-menu',
  imports: [MatIconModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  isOpen = input<boolean>(false);
  closed = output<boolean>();
  toggleMenuBurger(isOpen: boolean = false) {
    this.closed.emit(isOpen);
  }
}

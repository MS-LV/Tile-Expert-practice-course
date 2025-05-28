import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
interface MenuItem {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class HeaderComponent {
  isSearchActive = false;
  isMobileMenuOpen = false;
  menuItems: MenuItem[] = [
    { title: 'Ссылки', icon: 'link' },
    { title: 'Контакты', icon: 'people' }
  ]
  historyItems = ['закрепить теги', 'кнопка', 'приложение', 'форма', 'текстовое поле'];
  toggleMenuBurger(isOpen: boolean = false) {
    this.isMobileMenuOpen = isOpen;
    this.isSearchActive = false
    console.log('isOpen', this.isMobileMenuOpen);
  }
  toggleFilter(isOpen: boolean = false) {
    this.isSearchActive = isOpen;
    this.isMobileMenuOpen = false
    console.log('sdfdsf');

  }
}

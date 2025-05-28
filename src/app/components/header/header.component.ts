import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { FiltersComponent } from "../filters/filters.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    FiltersComponent
  ]
})
export class HeaderComponent {
  isSearchActive = false;
  isMobileMenuOpen = false;

  toggleMenuBurger(isOpen: boolean = false) {
    this.isMobileMenuOpen = isOpen;
    this.isSearchActive = false
    console.log('isOpen', this.isMobileMenuOpen);
  }
  toggleFilter(isOpen: boolean = false) {
    this.isSearchActive = isOpen;
    this.isMobileMenuOpen = false
  }
}

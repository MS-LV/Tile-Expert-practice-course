import { Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-filters',
  imports: [
    MatCheckboxModule,
    MatInputModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  isSearchActive = input<Boolean>();
  historyItems = ['закрепить теги', 'кнопка', 'приложение', 'форма', 'текстовое поле'];
}

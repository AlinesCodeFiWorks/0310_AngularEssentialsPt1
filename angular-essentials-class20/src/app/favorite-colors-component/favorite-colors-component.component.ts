import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-favorite-colors-component',
  imports: [],
  templateUrl: './favorite-colors-component.component.html',
  styleUrl: './favorite-colors-component.component.css',
})
export class FavoriteColorsComponentComponent {
  favoriteColors = signal<string[]>(['red', 'blue', 'green']);
  newColor = '';
  addNewColor(newColor: string): void {
    this.favoriteColors.update((favoriteColors) => [
      ...favoriteColors,
      newColor,
    ]);
    console.log(this.favoriteColors);
  }
}

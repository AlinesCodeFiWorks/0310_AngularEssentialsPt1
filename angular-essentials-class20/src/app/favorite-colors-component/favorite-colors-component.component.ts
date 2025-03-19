import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-colors-component',
  imports: [],
  templateUrl: './favorite-colors-component.component.html',
  styleUrl: './favorite-colors-component.component.css',
})
export class FavoriteColorsComponentComponent {
  favoriteColors = ['red', 'blue', 'green'];
  addNewColor(newColor: string): string[] {
    this.favoriteColors.push(newColor);
    return this.favoriteColors;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
 // Vos données textuelles imposées par la charte de Madame Ngono
  restaurantName = 'Le Calao Doré';
  slogan = 'Une cuisine camerounaise authentique au cœur d‘Akwa';
  ctaText = 'Découvrir notre Menu';
}

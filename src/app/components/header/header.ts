import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 // 1. L'interrupteur : le menu est caché (false) au départ
  isMenuOpen = false; 

  // Nos données de base
  links = ['Accueil', 'Menu', 'Témoignages', 'Horaires', 'Contact'];
  activeLink = 'Accueil';

  // 2. La fonction qui change l'interrupteur
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Si c'était faux, ça devient vrai. Si c'était vrai, ça devient faux.
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false; // Ferme le menu mobile quand on clique sur un lien
  }
}


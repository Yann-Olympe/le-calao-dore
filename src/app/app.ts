import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Menu } from './components/menu/menu';
import { Horaires } from './components/horaires/horaires';
import { Temoignages } from './components/temoignages/temoignages';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Hero,Footer,Temoignages,Horaires,Menu,], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('le-calao-dore');
}

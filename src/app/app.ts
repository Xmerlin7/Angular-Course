import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Cards } from './components/cards/cards';
import { Slider } from './components/slider/slider';
@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, Cards, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

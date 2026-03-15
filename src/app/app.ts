import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Cards } from './components/cards/cards';
import { Slider } from './components/slider/slider';
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, Cards, Slider, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

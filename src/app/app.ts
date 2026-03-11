import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Cards } from './components/cards/cards';
import { Slider } from './components/slider/slider';
@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, Cards, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
  protected readonly cards = [
    { imageSrc: '/deadProg.jpg', imageAlt: 'First custom card' },
    { imageSrc: '/54.png', imageAlt: 'Second custom card' },
    { imageSrc: '/luffy.jpg', imageAlt: 'Third custom card' },
    { imageSrc: '/54.png', imageAlt: 'Fourth custom card' },
    { imageSrc: '/54.png', imageAlt: 'Second custom card' },
    { imageSrc: '/luffy.jpg', imageAlt: 'Third custom card' },
    { imageSrc: '/54.png', imageAlt: 'Fourth custom card' },
  ];
}

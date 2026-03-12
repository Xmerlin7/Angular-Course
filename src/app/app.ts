import { Component, signal } from '@angular/core';
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
export class App {
  protected readonly title = signal('myapp');
  protected readonly cards = [
    {
      imageSrc: 'https://picsum.photos/seed/laptop/300/220',
      imageAlt: 'Laptop',
      productName: 'Laptop Pro 15"',
      price: 999,
    },
    {
      imageSrc: 'https://picsum.photos/seed/phone/300/220',
      imageAlt: 'Smartphone',
      productName: 'Smartphone X12',
      price: 499,
    },
    {
      imageSrc: 'https://picsum.photos/seed/headphones/300/220',
      imageAlt: 'Headphones',
      productName: 'Wireless Headphones',
      price: 199,
    },
    {
      imageSrc: 'https://picsum.photos/seed/watch/300/220',
      imageAlt: 'Smart Watch',
      productName: 'Smart Watch Series 5',
      price: 299,
    },
    {
      imageSrc: 'https://picsum.photos/seed/tablet/300/220',
      imageAlt: 'Tablet',
      productName: 'Tablet Ultra 10"',
      price: 399,
    },
    {
      imageSrc: 'https://picsum.photos/seed/camera/300/220',
      imageAlt: 'Camera',
      productName: 'DSLR Camera 4K',
      price: 799,
    },
    {
      imageSrc: 'https://picsum.photos/seed/speaker/300/220',
      imageAlt: 'Speaker',
      productName: 'Bluetooth Speaker',
      price: 149,
    },
    {
      imageSrc: 'https://picsum.photos/seed/keyboard/300/220',
      imageAlt: 'Keyboard',
      productName: 'Mechanical Keyboard',
      price: 129,
    },
  ];
}

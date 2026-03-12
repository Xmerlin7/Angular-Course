import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() imageSrc: string = 'https://picsum.photos/seed/product/300/220';
  @Input() imageAlt: string = 'Product image';
  @Input() productName: string = 'Product Name';
  @Input() price: number = 0;
  protected readonly products = [
    {
      id : 1,
      imageSrc: 'https://picsum.photos/seed/laptop/300/220',
      imageAlt: 'Laptop',
      productName: 'Laptop Pro 15"',
      price: 999,
    },
    {
      id : 2,
      imageSrc: 'https://picsum.photos/seed/phone/300/220',
      imageAlt: 'Smartphone',
      productName: 'Smartphone X12',
      price: 499,
    },
    {
      id : 3,
      imageSrc: 'https://picsum.photos/seed/headphones/300/220',
      imageAlt: 'Headphones',
      productName: 'Wireless Headphones',
      price: 199,
    },
    {
      id : 4,
      imageSrc: 'https://picsum.photos/seed/watch/300/220',
      imageAlt: 'Smart Watch',
      productName: 'Smart Watch Series 5',
      price: 299,
    },
    {
      id : 5,
      imageSrc: 'https://picsum.photos/seed/tablet/300/220',
      imageAlt: 'Tablet',
      productName: 'Tablet Ultra 10"',
      price: 399,
    },
    {
      id : 6,
      imageSrc: 'https://picsum.photos/seed/camera/300/220',
      imageAlt: 'Camera',
      productName: 'DSLR Camera 4K',
      price: 799,
    },
    {
      id : 7,
      imageSrc: 'https://picsum.photos/seed/speaker/300/220',
      imageAlt: 'Speaker',
      productName: 'Bluetooth Speaker',
      price: 149,
    },
    {
      id : 8,
      imageSrc: 'https://picsum.photos/seed/keyboard/300/220',
      imageAlt: 'Keyboard',
      productName: 'Mechanical Keyboard',
      price: 129,
    },
  ];
}

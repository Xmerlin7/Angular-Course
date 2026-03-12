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
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() imageSrc: string = '/54.png';
  @Input() imageAlt: string = 'Card image';
}

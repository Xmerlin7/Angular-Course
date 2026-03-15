import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    console.log('ProductCard view loaded');
  }

  ngOnDestroy(): void {
    console.log('ProductCard destroyed');
  }
}

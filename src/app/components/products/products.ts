import { AfterViewInit, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-products',
  imports: [Cards],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, AfterViewInit, OnDestroy {
  // products: Product[] = [];
  // private readonly productService = inject(ProductService);
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    console.log('Products view loaded');
  }

  ngOnDestroy(): void {
    console.log('Products component destroyed');
  }
}

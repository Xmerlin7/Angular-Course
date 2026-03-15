import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Smart Watch',
      price: 120,
      description: 'This watch is very beautiful and smart',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', // Actual smart watch image
      category: 'electronics',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Headphones',
      price: 80,
      description: 'High quality wireless headphones',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', // Actual smart watch image

      category: 'electronics',
      quantity: 0,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { map, Observable } from 'rxjs';

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  stock: number;
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://dummyjson.com/products';

  getProducts(): Observable<Product[]> {
    return this.http
      .get<DummyJsonProductsResponse>(`${this.baseUrl}?limit=12`)
      .pipe(map((response) => response.products.map((product) => this.mapToProduct(product))));
  }

  createProduct(payload: Omit<Product, 'id'>): Observable<Product> {
    return this.http
      .post<DummyJsonProduct>(`${this.baseUrl}/add`, {
        title: payload.name,
        description: payload.description,
        price: payload.price,
        category: payload.category,
        thumbnail: payload.image,
        stock: payload.quantity,
      })
      .pipe(map((product) => this.mapToProduct(product)));
  }

  updateProduct(id: number, payload: Omit<Product, 'id'>): Observable<Product> {
    return this.http
      .put<DummyJsonProduct>(`${this.baseUrl}/${id}`, {
        title: payload.name,
        description: payload.description,
        price: payload.price,
        category: payload.category,
        thumbnail: payload.image,
        stock: payload.quantity,
      })
      .pipe(map((product) => this.mapToProduct(product)));
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  private mapToProduct(product: DummyJsonProduct): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      image: product.thumbnail,
      category: product.category,
      quantity: product.stock,
    };
  }
}

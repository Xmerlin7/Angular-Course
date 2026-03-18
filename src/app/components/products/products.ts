import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-products',
  imports: [Cards, ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly formBuilder = inject(FormBuilder);

  products: Product[] = [];
  isLoading = false;
  errorMessage = '';
  editingProductId: number | null = null;

  readonly productForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [1, [Validators.required, Validators.min(1)]],
    image: ['https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', [Validators.required]],
    category: ['beauty', [Validators.required]],
    quantity: [1, [Validators.required, Validators.min(0)]],
  });

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load products from API.';
        this.isLoading = false;
      },
    });
  }

  submitForm(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formValue = this.productForm.getRawValue();
    const payload = {
      name: formValue.name,
      description: formValue.description,
      price: formValue.price,
      image: formValue.image,
      category: formValue.category,
      quantity: formValue.quantity,
    };

    this.errorMessage = '';

    if (this.editingProductId !== null) {
      this.productService.updateProduct(this.editingProductId, payload).subscribe({
        next: (updatedProduct) => {
          this.products = this.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          );
          this.resetForm();
        },
        error: () => {
          this.errorMessage = 'Could not update product.';
        },
      });
      return;
    }

    this.productService.createProduct(payload).subscribe({
      next: (createdProduct) => {
        this.products = [createdProduct, ...this.products];
        this.resetForm();
      },
      error: () => {
        this.errorMessage = 'Could not create product.';
      },
    });
  }

  startEdit(product: Product): void {
    this.editingProductId = product.id;
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: product.quantity,
    });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  deleteProduct(id: number): void {
    this.errorMessage = '';
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id);
      },
      error: () => {
        this.errorMessage = 'Could not delete product.';
      },
    });
  }

  private resetForm(): void {
    this.editingProductId = null;
    this.productForm.reset({
      name: '',
      description: '',
      price: 1,
      image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      category: 'beauty',
      quantity: 1,
    });
  }
}

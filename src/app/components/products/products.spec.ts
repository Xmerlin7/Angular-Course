import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Products } from './products';
import { ProductService } from '../../services/product';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    const productServiceSpy = {
      getProducts: () => of([]),
      createProduct: () => of(),
      updateProduct: () => of(),
      deleteProduct: () => of(),
    };

    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

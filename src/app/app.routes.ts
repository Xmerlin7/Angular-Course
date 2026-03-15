import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./components/slider/slider').then((component) => component.Slider),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./components/products/products').then((component) => component.Products),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then((component) => component.Contact),
  },
  { path: '**', redirectTo: 'home' },
];

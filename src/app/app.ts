import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp } from './first-comp/first-comp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
  
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienciaComponent } from './experiencia-component/experiencia-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienciaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('atv-reactiveform');
}

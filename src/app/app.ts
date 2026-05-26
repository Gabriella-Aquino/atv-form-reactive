import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario-component/cadastro-usuario-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroUsuarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atv-reactiveform');
}

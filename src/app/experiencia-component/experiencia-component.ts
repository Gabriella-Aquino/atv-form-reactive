import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-component',
  imports: [ReactiveFormsModule],
  templateUrl: './experiencia-component.html',
  styleUrl: './experiencia-component.css',
})
export class ExperienciaComponent {
  private fb = inject(FormBuilder);
  enviado = false;

  form = this.fb.group({
    empresa: ['', Validators.required],
    habilidades: this.fb.array([this.fb.control('', Validators.required)]),
  });

  get habilidades() {
    return this.form.get('habilidades') as FormArray;
  }

  adicionarHabilidade() {
    this.habilidades.push(this.fb.control('', Validators.required));
  }

  removerHabilidade(id: number) {
    if (this.habilidades.length > 1) {
      this.habilidades.removeAt(id);
    }
  }

  onSubmit() {
    this.enviado = true;
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    console.log('Experiência enviada:', this.form.value);
  }
}

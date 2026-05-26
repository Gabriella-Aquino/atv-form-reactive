import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { senhaForte } from '../validators/senha-forte';
import { senhasIguais } from '../validators/senhas-iguais';

@Component({
  selector: 'app-cadastro-usuario-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-usuario-component.html',
  styleUrl: './cadastro-usuario-component.css',
})
export class CadastroUsuarioComponent {
  userForm;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(
      {
        nomeCompleto: [
          '',
          [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
        ],
        cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
        email: ['', [Validators.required, Validators.email]],
        dataNascimento: [''],
        senha: ['', [Validators.required, Validators.maxLength(8), senhaForte]],
        confirmarSenha: ['', [Validators.required]],
        perfil: ['', [Validators.required]],
      },
      { validators: [senhasIguais] },
    );
  }

  enviado = false;

  getNome() {
    return this.userForm.get('nomeCompleto');
  }

  getCpf() {
    return this.userForm.get('cpf');
  }

  getEmail() {
    return this.userForm.get('email');
  }

  getDataNascimento() {
    return this.userForm.get('dataNascimento');
  }

  getSenha() {
    return this.userForm.get('senha');
  }

  getConfirmarSenha() {
    return this.userForm.get('confirmarSenha');
  }

  getPerfil() {
    return this.userForm.get('perfil');
  }

  onSubmit() {
    this.enviado = true;
    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) {
      return;
    }

    console.log('Usuário cadastrado:', this.userForm.value);
  }
}

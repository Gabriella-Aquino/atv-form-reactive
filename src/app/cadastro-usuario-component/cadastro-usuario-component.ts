import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { senhaForte } from '../validators/senha-forte';
import { senhasIguais } from '../validators/senhas-iguais';

@Component({
  selector: 'app-cadastro-usuario-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-usuario-component.html',
  styleUrl: './cadastro-usuario-component.css',
})
export class CadastroUsuarioComponent {
  enviado = false;

  userForm = new FormGroup(
    {
      nomeCompleto: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl(),
      senha: new FormControl('', [Validators.required, Validators.maxLength(8), senhaForte]),
      confirmarSenha: new FormControl('', [Validators.required]),
      perfil: new FormControl('', [Validators.required]),
    },
    [senhasIguais],
  );

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

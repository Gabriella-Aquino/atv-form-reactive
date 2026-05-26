import { AbstractControl, ValidationErrors } from '@angular/forms';

export function senhaForte(control: AbstractControl): ValidationErrors | null {
  const valor = control.value as string;

  if (!valor) return null;

  const temMaiuscula = /A-Z/.test(valor);
  const temNumero = /\d/.test(valor);

  const valido = temMaiuscula && temNumero;

  return valido ? null : {senhaFraca: true} 
}

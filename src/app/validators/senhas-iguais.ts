import { AbstractControl, ValidationErrors } from "@angular/forms";

export function senhasIguais(group: AbstractControl): ValidationErrors | null{
  const senha = group.get("senha")?.value
  const confirmarSenha = group.get("confirmarSenha")?.value
  
  return senha === confirmarSenha ? null : {senhasDiferentes: true}  
}
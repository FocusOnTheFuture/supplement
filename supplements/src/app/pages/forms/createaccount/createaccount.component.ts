import { Component } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  submitForm() {
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    if (nome && email && senha) {
      // lógica para enviar os dados do formulário para o servidor
      console.log('Enviando dados para o servidor:', { nome, email, senha });
    } else {
      alert('Por favor, preencha todos os campos antes de enviar o formulário.');
    }
  }

  loginWithGoogle() {
    // Redireciona para a página de login do Google
    window.location.href = 'https://myaccount.google.com/';
  }
}

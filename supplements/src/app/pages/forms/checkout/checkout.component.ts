import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewInit {

  ngAfterViewInit() {
    const cepInput = document.getElementById('cep') as HTMLInputElement;
    cepInput.addEventListener('blur', function() {
      const cep = cepInput.value.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            if (!data.erro) {
              const addressInput = document.getElementById('address') as HTMLInputElement;
              const cityInput = document.getElementById('city') as HTMLInputElement;
              addressInput.value = data.logradouro;
              cityInput.value = data.localidade;
            }
          })
          .catch(error => {
            console.error('Erro ao buscar CEP:', error);
          });
      }
    });

    const form = document.getElementById('payment-form') as HTMLFormElement;
    form.addEventListener('submit', function(event) {
      const fullName = (document.getElementById('full-name') as HTMLInputElement).value;
      const cep = (document.getElementById('cep') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      if (!fullName || !cep || !email) {
        event.preventDefault();
        alert('Preencha todos os campos obrigatórios!');
      }
    });
  }
}


import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
  imports: [RouterLink, CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask()] 
})
export class ClienteCreateComponent {
  cliente = {
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private readonly clienteService: ClienteService, private readonly router: Router) {}

  salvarCliente() {
    if (this.validaFormulario()) {
      this.clienteService.createCliente(this.cliente).subscribe(
        (response) => {
          alert('Cliente cadastrado com sucesso!');
          this.router.navigate(['/clientes']);
        },
        (error) => {
          if (error.message === 'E-mail já cadastrado. Tente com outro e-mail.') {
            alert('Erro: E-mail já cadastrado. Tente com outro e-mail.');
          } else {
            alert('Erro ao cadastrar cliente!');
          }
        }
      );
    }
  }

  validaFormulario() {
    return this.cliente.nome.trim() !== '' && 
           this.cliente.email.trim() !== '' && 
           this.cliente.cep.trim() !== '' && 
           this.cliente.endereco.trim() !== '' && 
           this.cliente.bairro.trim() !== '' && 
           this.cliente.cidade.trim() !== '' && 
           this.cliente.estado.trim() !== '';
  }

  buscarEndereco() {
    if (this.cliente.cep) {
      this.clienteService.buscarEndereco(this.cliente.cep).subscribe(
        (response) => {
          this.cliente.endereco = response.logradouro;
          this.cliente.bairro = response.bairro;
          this.cliente.cidade = response.localidade;
          this.cliente.estado = response.uf;
        },
        (error) => {
          alert('Erro ao buscar o endereço. Verifique o CEP.');
        }
      );
    }
  }
}
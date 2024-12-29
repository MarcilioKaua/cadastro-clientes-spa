import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  imports: [ReactiveFormsModule, RouterLink, CommonModule]  
})
export class ClienteEditComponent implements OnInit {
  clienteId!: number;
  clienteForm: FormGroup;
  endereco: any;

  constructor(
    private readonly clienteService: ClienteService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.clienteId = +this.route.snapshot.paramMap.get('id')!;
    this.carregarCliente();
  }

  carregarCliente(): void {
    this.clienteService.getClienteById(this.clienteId).subscribe((cliente) => {
      this.clienteForm.patchValue({
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        cep: cliente.cep,
        endereco: cliente.endereco,
        bairro: cliente.bairro,
        cidade: cliente.cidade,
        estado: cliente.estado
      });
    });
  }

  buscarEndereco(): void {
    const cep = this.clienteForm.get('cep')?.value;
    if (cep) {
      this.clienteService.buscarEndereco(cep).subscribe((endereco) => {
        this.endereco = endereco;
        this.clienteForm.patchValue({
          endereco: endereco.logradouro,
          bairro: endereco.bairro,
          cidade: endereco.localidade,
          estado: endereco.uf
        });
      });
    } else {
      alert('Por favor, insira um CEP.');
    }
  }

  salvarCliente(): void {
    if (this.clienteForm.valid) {
      this.clienteService.updateCliente({ id: this.clienteId, ...this.clienteForm.value }).subscribe(() => {
        alert('Cliente atualizado com sucesso!');
        this.router.navigate(['/clientes']);
      }, (error) => {
        if (error.message === 'E-mail já cadastrado. Tente com outro e-mail.') {
          alert('Erro: E-mail já cadastrado. Tente com outro e-mail.');
        } else {
          alert('Erro ao atualizar cliente.');
        }
      });
    }
  }
}

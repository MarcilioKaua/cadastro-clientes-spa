import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-list', 
  standalone: true,
  templateUrl: './cliente-list.component.html',
  imports: [FormsModule, CommonModule, RouterLink],
})
export class ClienteListComponent implements OnInit {
  nome: string = '';
  clientes: any[] = [];

  constructor(private readonly clienteService: ClienteService) {}

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes(): void {
    this.clienteService.getClientes(this.nome).subscribe((data) => {
      this.clientes = data;
    });
  }

  limparBusca(): void {
    this.nome = '';
    this.buscarClientes();
  }

  excluirCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.buscarClientes();
    });
  }
}

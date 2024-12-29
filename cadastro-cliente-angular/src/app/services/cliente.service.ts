import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly baseUrl = 'http://localhost:8085/api/cliente'; 
  
  constructor(private readonly http: HttpClient) {}

  getClientes(nome?: string): Observable<any[]> {
    const url = nome ? `${this.baseUrl}/listar?nome=${nome}` : `${this.baseUrl}/listar`;
    return this.http.get<any[]>(url);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/salvar`, cliente).pipe(
      catchError((error) => {
        console.log('Error')
        if (error.status === 400) { 
          throw new Error('E-mail já cadastrado. Tente com outro e-mail.');
        } else {
          throw error;
        }
      })
    );
  }

  updateCliente(cliente: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${cliente.id}`, cliente).pipe(
      catchError((error) => {
        console.log('Error', error);
        if (error.status === 400) {  
          console.log('Erro ao editar: E-mail duplicado');
          throw new Error('E-mail já cadastrado. Tente com outro e-mail.');
        } else {
          throw error;
        }
      })
    );
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  buscarEndereco(cep: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/buscarEndereco?cep=${cep}`, {});
  }
}

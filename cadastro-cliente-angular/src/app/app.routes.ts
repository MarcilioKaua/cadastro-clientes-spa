import { Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    { path: 'clientes', component: ClienteListComponent },
    { path: 'clientes/novo', component: ClienteCreateComponent },
    { path: 'clientes/editar/:id', component: ClienteEditComponent },
  ];
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { RegisterClientComponent } from './register-client/register-client.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'agendamentos', component: AgendamentosComponent },
    { path: 'clientes', component: RegisterClientComponent }
];

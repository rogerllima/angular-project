import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'agendamentos', component: AgendamentosComponent },
];

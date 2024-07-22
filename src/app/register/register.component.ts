import { Component } from '@angular/core';
import { Register } from '../register';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `    
<div class="h-full w-full">
  <form class="flex flex-col items-center justify-center h-full w-full">
  <mat-form-field>
    <mat-label class="text-xl">Nome</mat-label>
    <input matInput>
  </mat-form-field>
  <mat-form-field>
    <mat-label class="text-xl">Senha</mat-label>
    <input  matInput>
  </mat-form-field>
  <mat-form-field>
    <mat-label class="text-xl">Email</mat-label>
    <input matInput>
  </mat-form-field>
  <button mat-flat-button class="">Registrar</button>
  </form>
</div>`,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  register: Register = {
    name: '',
    password: '',
    email: '',
  }
}

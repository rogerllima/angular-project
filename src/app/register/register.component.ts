import { Component } from '@angular/core';
import { Register } from '../register';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
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

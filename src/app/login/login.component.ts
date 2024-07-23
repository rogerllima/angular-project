import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = new FormGroup({
    email: new FormControl(
      '',
      Validators.required),
    password: new FormControl(
      '',
      Validators.required)
  });

  constructor(
    private loginService: LoginService
  ) { }

  onSubmit() {
    this.loginService.execute(this.login.getRawValue());
  }
}

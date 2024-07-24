import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
  ) { }

  onSubmit() {
    this.loginService.execute(this.login.getRawValue())
      .subscribe({
        next: (login: any) => {
          localStorage.setItem('token', JSON.stringify(login.token));
        },
        error: e => {
          const errorMessage = e.error?.message || 'Erro desconhecido';
          this._snackBar.open('Register failed: ' + JSON.stringify(errorMessage), 'Close', { duration: 3000 });
          console.log(JSON.stringify(errorMessage));
        }
      });;
  }
}

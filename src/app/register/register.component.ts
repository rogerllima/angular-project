import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(
    private registerService: RegisterService,
    private _snackBar: MatSnackBar,
  ) { }

  register = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
        Validators.nullValidator
      ]),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.nullValidator
      ]),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
        Validators.nullValidator,
      ],
    ),
  });

  onSubmit() {
    this.registerService.register(this.register.getRawValue())
      .subscribe({
        next: () => {
          this._snackBar.open('Register success', 'Close', { duration: 3000 })
          this.register.reset()
        },
        error: e => {
          const errorMessage = e.error?.message || 'Erro desconhecido';
          this._snackBar.open('Register failed: ' + JSON.stringify(errorMessage), 'Close', { duration: 3000 });
          console.log(JSON.stringify(errorMessage));
        }
      });;
  }
}

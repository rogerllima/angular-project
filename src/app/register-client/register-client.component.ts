import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterClientService } from './services/registerClient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {

  constructor(
    private registerClientService: RegisterClientService,
    private _snackBar: MatSnackBar,
  ) { }

  registerClient = new FormGroup({
    name: new FormControl(
      "",
      [
        Validators.required
      ]
    ),
    phone: new FormControl(
      "",
      [
        Validators.required
      ])
  });

  onSubmitRegisterClient() {
    this.registerClientService.register(this.registerClient.getRawValue())
      .subscribe({
        next: () => {
          this._snackBar.open('Client registered successfully', 'Close', { duration: 3000 });
        },
        error: e => {
          const errorMessage = e.error?.message || 'Erro desconhecido';
          this._snackBar.open('Register failed: ' + JSON.stringify(errorMessage), 'Close', { duration: 3000 });
          console.log(JSON.stringify(errorMessage));
        }
      });
  }
}

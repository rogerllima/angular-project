import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
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
  ) { }

  register = new FormGroup({
    name: new FormControl(
      '',
      Validators.required),
    password: new FormControl(
      '',
      Validators.required),
    email: new FormControl(
      '',
      Validators.required),
  });
  
  onSubmit() {
    this.registerService.register(this.register.getRawValue());
  }
}

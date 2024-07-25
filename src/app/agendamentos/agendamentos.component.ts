import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { ConfirmAgendamento } from './confirmAgendamento';
import { ListClientsService } from './services/listClients/listClients.service';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './agendamentos.component.html',
  styleUrl: './agendamentos.component.css'
})
export class AgendamentosComponent implements OnInit {
  registerClient = new FormGroup({
    name: new FormControl(
      '',
      Validators.required),
    phone: new FormControl(
      '',
      Validators.required)
  });

  scheduleClient = new FormGroup({
    search: new FormControl(
      '',
      Validators.required),
    confirmClient: new FormControl(
      true,
      Validators.required),
    attendanceDate: new FormControl(
      '',
      Validators.required),
    attendanceHour: new FormControl(
      '',
      Validators.required)
  });

  constructor(
    private _snackBar: MatSnackBar,
    private listClientsService: ListClientsService,
  ) { }

  confirmAgendamento: ConfirmAgendamento[] = [
    { value: 'true', viewValue: 'Confirmar Agendamento' },
    { value: 'false', viewValue: 'Não Confirmar Agendamento' },
  ];

  delay = 500;

  ngOnInit(): void {
    this.scheduleClient.get('search')?.valueChanges
      .pipe(
        debounce(() => {
          this.delay = this.delay;
          return interval(this.delay);
        })
      )
      .subscribe(
        data => this.listClientsService.register(data as string)
          .subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error: e => {
              const errorMessage = e.error?.message || 'Erro desconhecido';
              this._snackBar.open('Register failed: ' + JSON.stringify(errorMessage), 'Close', { duration: 3000 });
              console.log(JSON.stringify(errorMessage));
            }
          })
      );
  }

  onSubmitAgendamento() {
    this._snackBar.open('Register success', 'Close', { duration: 3000 });
    console.log('onSubmit', this.scheduleClient.value);
  }
}

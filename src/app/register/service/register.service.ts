import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "../register";
import { catchError } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    constructor(
        private http: HttpClient, 
        private _snackBar: MatSnackBar,
    ) { }
    register(data: Register) {
        this.http.post('http://localhost:8080/auth/register', data).pipe(
            catchError((error) => {
                console.log('Error:', error);
                throw error;
            })
        ).subscribe(register => {
            this._snackBar.open('Register success', 'Close', { duration: 3000 });
        },
        );
    }
}
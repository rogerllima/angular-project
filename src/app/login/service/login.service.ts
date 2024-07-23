import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { Login } from "../login";

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(
        private http: HttpClient,
    ) { }
    execute(data: Login) {
        this.http.post('http://localhost:8080/auth/login', data).pipe(
            catchError((error) => {
                console.log('Error:', error);
                throw error;
            })
        ).subscribe((register: any) => {
            localStorage.setItem('token', JSON.stringify(register.token));
        },
        );
    }
}
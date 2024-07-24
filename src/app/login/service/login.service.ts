import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../login";

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(
        private http: HttpClient,
    ) { }
    execute(data: Login) {
        return this.http.post('http://localhost:8080/auth/login', data)
    }
}
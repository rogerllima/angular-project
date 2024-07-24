import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "../register";

@Injectable({ providedIn: 'root' })
export class RegisterService {
    constructor(
        private http: HttpClient, 
    ) { }
    register(data: Register) {
        return this.http.post('http://localhost:8080/auth/register', data)
    }
}
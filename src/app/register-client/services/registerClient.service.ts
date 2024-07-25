import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterClientDto } from "../dto/registerClient.dto";

@Injectable({ providedIn: 'root' })
export class RegisterClientService {
    constructor(
        private http: HttpClient, 
    ) { }
    register(data: RegisterClientDto) {
        return this.http.post('http://localhost:8080/client/create', data)
    }
}
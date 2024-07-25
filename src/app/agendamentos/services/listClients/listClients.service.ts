import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ListClientsService {
    constructor(
        private http: HttpClient,
    ) { }
    register(data: string) {
        return this.http.get('http://localhost:8080/client/find',
            {
                params: { data }
            })
    }
}
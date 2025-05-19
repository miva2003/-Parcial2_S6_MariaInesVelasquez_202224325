import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Aerolinea } from './aerolinea';

@Injectable()
export class AerolineasService {

    private apiUrl = environment.baseUrl;

    getAerolineas() {
        return this.http.get<Aerolinea[]>(this.apiUrl+'flights.json');
    }

    getAerolinea(id: string) {
        return this.http.get<Aerolinea>(this.apiUrl + '/' + id+'.json');
    }
    constructor(private http: HttpClient) { }

}

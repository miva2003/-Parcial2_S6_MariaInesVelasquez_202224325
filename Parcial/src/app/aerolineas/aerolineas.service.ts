import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AerolineasService {

    private apiUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

}

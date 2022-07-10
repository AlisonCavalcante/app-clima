import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../shared/models/City';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  getClimaCity(nameCity: string): Observable<City> {
    return this.http.get<City>(Constantes.URL_BASE + `${nameCity}&appid=${Constantes.API_KEY}`);
  }
}

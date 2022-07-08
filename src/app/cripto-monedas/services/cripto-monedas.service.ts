import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moneda } from '../interfaces/cripto-monedas.interface';

@Injectable({
  providedIn: 'root',
})
export class CriptoMonedasService {
  constructor(private http: HttpClient) {}

  getCriptomonedas(): Observable<Moneda[]> {
    return this.http.get<Moneda[]>('http://localhost:3000/criptomonedas');
  }

  agregarCriptomoneda( moneda: Moneda ): Observable<Moneda> {
    return this.http.post<Moneda>('http://localhost:3000/criptomonedas', moneda)
  }
}

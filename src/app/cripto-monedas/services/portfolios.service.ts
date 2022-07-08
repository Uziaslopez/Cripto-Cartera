import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartera } from '../interfaces/cripto-monedas.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<Cartera[]> {
    return this.http.get<Cartera[]>('http://localhost:3000/portfolios');
  }

  agregarPortfolios( cartera: Cartera): Observable<Cartera> {
    return this.http.post<Cartera>('http://localhost:3000/portfolios', cartera)
  }
}

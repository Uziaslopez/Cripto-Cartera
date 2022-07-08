import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesCripto } from '../../enum/routes.enum';
import { RoutesFront } from '../../enum/routesFront.enum';
import { Moneda } from '../../interfaces/cripto-monedas.interface';
import { CriptoMonedasService } from '../../services/cripto-monedas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class ListadoComponent implements OnInit {
  public routesFront = RoutesFront;
  public routesCripto = RoutesCripto;

  criptomonedas: Moneda[] = [];

  constructor(
    private criptomonedasService: CriptoMonedasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criptomonedasService
      .getCriptomonedas()
      .subscribe((criptomonedas) => (this.criptomonedas = criptomonedas));
  }
 
  }

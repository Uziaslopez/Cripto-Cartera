import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesCripto } from '../../enum/routes.enum';
import { RoutesFront } from '../../enum/routesFront.enum';
import { Cartera } from '../../interfaces/cripto-monedas.interface';
import { PortfoliosService } from '../../services/portfolios.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styles: [
    `
      mat-card {
        margin: 15px;
      }
    `,
  ]
})
export class PortfoliosComponent implements OnInit {
  public routesFront = RoutesFront;
  public routesCripto = RoutesCripto;

  portfolios: Cartera[] = [];

  constructor(
    private portfoliosService: PortfoliosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.portfoliosService
    .getPortfolios()
    .subscribe((portfolios) => (this.portfolios = portfolios));
  }

}

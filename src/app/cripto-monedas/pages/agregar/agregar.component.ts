import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cartera, Moneda } from '../../interfaces/cripto-monedas.interface';
import { CriptoMonedasService } from '../../services/cripto-monedas.service';
import { PortfoliosService } from '../../services/portfolios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  moneda: Moneda= {
    id:'',
    name:'',
    url:'',
  }
  cartera: Cartera= {
    id:'',
    name:'',
    monedas:'',
  }

  constructor( private criptoMonedasService: CriptoMonedasService,
               private portfoliosService: PortfoliosService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {}

  guardar() { 
    if ( this.moneda.name.trim().length === 0 ) {
      this.mostrarSnackBar('Falta informacion')
      return;
    }
    this.criptoMonedasService.agregarCriptomoneda(this.moneda)
    .subscribe( moneda=> { 
      this.router.navigate(['/cripto-monedas/listado']);
      this.mostrarSnackBar('Guardado con éxito');
  })
  }
  grabar() { 
    if ( this.cartera.name.trim().length === 0 ) {
      this.mostrarSnackBar('Falta informacion')
      return;
    }
    this.portfoliosService.agregarPortfolios(this.cartera)
    .subscribe( cartera=> { 
      this.router.navigate(['/cripto-monedas/portfolios']);
      this.mostrarSnackBar('Guardado con éxito');
  })
  }
  mostrarSnackBar( mensaje: string) {
    this.snackBar.open( mensaje, 'Ok', {
      duration: 3000
    });
  }
}

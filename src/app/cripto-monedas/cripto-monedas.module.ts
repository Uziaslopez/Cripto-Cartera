import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CriptoMonedasRoutingModule } from './cripto-monedas-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';



@NgModule({
  declarations: [
    AgregarComponent,
    PortfoliosComponent,
    HomeComponent,
    ListadoComponent,
    ComprarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    CriptoMonedasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class CriptoMonedasModule { }

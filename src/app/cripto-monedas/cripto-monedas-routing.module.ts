import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: 'listado',
        pathMatch: 'full',
        component: ListadoComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },      
      {
        path: 'comprar',
        component: ComprarComponent,
      },
      {
        path: 'portfolios',
        component: PortfoliosComponent,
      },
      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriptoMonedasRoutingModule {}

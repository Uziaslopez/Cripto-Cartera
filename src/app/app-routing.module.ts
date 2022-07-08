import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';

const routes: Routes = [
   {
    path: 'cripto-monedas',
    loadChildren: () =>
      import('./cripto-monedas/cripto-monedas.module').then(
        (m) => m.CriptoMonedasModule
      ),

  },
  {
    path: 'criptoapp',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: 'criptoapp',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

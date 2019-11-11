import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OfertaDetalheComponent } from './pages/oferta/oferta-detalhe.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';



const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'oferta/:id', component: OfertaDetalheComponent },
    {path : 'pagamento/:id' , component: PagamentoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }







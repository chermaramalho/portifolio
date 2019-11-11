import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../interfaces/oferta.interface';


@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  ofertas: Oferta[] = [];
  carregando = true;

  constructor( private http: HttpClient ) {
    this.listarOfertas();
  }

  listarOfertas(){
    return new Promise(  ( resolve, reject ) => {
      this.http.get('https://playground.barato.com.br/desafio-front/api/offers')
          .subscribe( (resp: Oferta[]) => {
            this.ofertas = resp;
            this.carregando = false;
            resolve();
          });
    });
  }

  getOferta( id: string ) {
    return this.http.get(`https://playground.barato.com.br/desafio-front/api/offer/${ id }`);
  }

}

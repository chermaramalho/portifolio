import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';
import {OfertaDescricao} from '../../interfaces/oferta.interface';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta-detalhe.component.html',
  styleUrls: ['./oferta-detalhe.component.css']
})
export class OfertaDetalheComponent implements OnInit {
 
  oferta: OfertaDescricao;
  imagens: String[];


  constructor( private route: ActivatedRoute,
               public ofertaService: OfertaService ) { }

  ngOnInit() {
        this.route.params
        .subscribe( parametros => {
          this.ofertaService.getOferta(parametros['id'])
                .subscribe( (oferta: OfertaDescricao) => {
                  this.oferta = oferta;
                  this.imagens = oferta.images;
                });
                
        });

  }

}

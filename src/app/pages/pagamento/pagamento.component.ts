import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../services/oferta.service';
import {OfertaDescricao} from '../../interfaces/oferta.interface';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  
  oferta: OfertaDescricao;

  constructor( private route: ActivatedRoute,
    public ofertaService: OfertaService ) { }

ngOnInit() {
      this.route.params
      .subscribe( parametros => {
      this.ofertaService.getOferta(parametros['id'])
          .subscribe( (oferta: OfertaDescricao) => {
            this.oferta = oferta;
          });
          
      });

}


}

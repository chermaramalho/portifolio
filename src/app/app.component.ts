import { Component } from '@angular/core';
import { OfertaService } from './services/oferta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( 
               public ofertaService: OfertaService ) {

  }

}

import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService,
                  private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string ) {
    if( termino.length < 1 ) {
      return;
    }

  this.router.navigate(['search', termino]);
  }
  
}

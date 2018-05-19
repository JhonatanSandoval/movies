import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../../services/generos.service';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  listaGeneros: object[];

  constructor(
    private generoService: GenerosService
  ) { }

  ngOnInit() {
    this.listarGeneros();
  }

  listarGeneros(){
    this.generoService.listGeneros().then(
      ( listaGeneros:object[] ) => {
        this.listaGeneros = listaGeneros;
      }
    )
  }

  eliminarGenero( id: string){
    this.generoService.eliminarGenero( id ).then(
      ()=>{
        this.listarGeneros();
      }
    )
  }

}

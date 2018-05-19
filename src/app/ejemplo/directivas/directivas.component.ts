import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent implements OnInit {

  autor: string = '<Ben Parker>';
  mensaje: string;
  mostrar: boolean= false;
  btnText: string = 'Mostrar';


  paises: string[] = ['Peru', 'Argentina', 'Brasil', 'Colombia'];
  
  constructor() { }

  ngOnInit() {
    this.mensaje = `Un gran poder require una gran responsabilidad ${ this.autor }`;
  }


  mostrarOcultar(){
    this.mostrar = !this.mostrar;
    // if( this.mostrar ){
    //   this.btnText = 'Ocultar';
    // }else{
    //   this.btnText = 'Mostrar';
    // }
    // this.btnText = (this.mostrar)? 'Ocultar' : 'Mostrar';
  }

}

import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../../services/generos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-generos',
  templateUrl: './form-generos.component.html',
  styleUrls: ['./form-generos.component.css']
})
export class FormGenerosComponent implements OnInit {
     
  genero:Genero 

  accion:string = "agregar"

  constructor(
    private generoService:GenerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        if(params.genero_id){
             this.accion = "editar"
          this.showGenero(params.genero_id);
        }else{
          console.log('Nuevo')
        }
      }
    )
  }

  showGenero( id: string){
    this.generoService.showGenero(id).then(
      (genero: Genero)=>{
        this.genero = genero;
      }
    )
  }

  guardar(){

    if( this.accion == 'editar' ){
      this.genero.generos_id = this.genero._id; 
      this.generoService.updateGenero( this.genero ).then(
        ()=>{
          alert('Genero Modificado');
          this.router.navigate(['/generos'])
        },
        ()=>{
          alert('Problemas al modificar genero');
        }
      )

    }else{
      this.generoService.addNewGenero( this.genero ).then(
        ()=>{
          alert('Genero Creado');
          this.router.navigate(['/generos'])
        },
        ()=>{
          alert('Problemas al crear genero');
        }
      )
    }
  }

}

export interface Genero {
     _id: string ,
     nombre: string ,
     generos_id: string      
}
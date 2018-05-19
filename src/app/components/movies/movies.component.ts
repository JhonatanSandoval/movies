import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public listaMovies:object[];
  constructor(
     public moviesService: MoviesService    
  ) { }
  ngOnInit() {
    this.cargarPeliculas()
  }

  cargarPeliculas() {
     this.moviesService.listaPeliculas().then(
          //resolve
          ( listaPeliculas:object[] )=>{
            this.listaMovies = listaPeliculas;
          },
          // reject 
          ( err )=>{ }
        );
  }

     eliminarPelicula( titulo:string , _id: string){
          if(confirm(`¿Seguro desea eliminar "${titulo.toUpperCase()}" de la lista de películas?`) ){
               this.moviesService.eliminarPelicula(_id).then(
                    () => {
                         this.cargarPeliculas()
                    },
                    () => {

                    }
               )
          }
     }

}

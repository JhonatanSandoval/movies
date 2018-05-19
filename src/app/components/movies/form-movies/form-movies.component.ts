import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../../services/generos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { Genero } from '../../generos/form-generos/form-generos.component';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit {

     listaGeneros = []
     movie: Movie

     accion:string = "agregar"

     constructor(
          private generosService: GenerosService,
          private moviesService: MoviesService,
          private activatedRoute: ActivatedRoute,
          private router: Router
     ) { }

     ngOnInit() {
          this.cargarListadoGeneros()

          this.activatedRoute.params.subscribe(
               (params)=>{
                 if(params.pelicula_id){
                      this.accion = "editar"
                      this.showMovie(params.pelicula_id);
                 }
               }
             )
     }

     showMovie(movie_id) {
          this.moviesService.detallePelicula(movie_id).then(
               (pelicula: Movie) => {
                    this.movie = pelicula
               }
          )
     }

     cargarListadoGeneros() {
          this.generosService.listGeneros().then(
               ( listaGeneros:object[] ) => {
                    this.listaGeneros = listaGeneros;
               }
          )
     }

     guardar() {
          console.log('movie', this.movie)
          if (this.accion == 'agregar') {
               this.moviesService.agregarPelicula(this.movie).then(
                    () => {
                         this.router.navigate(['/movies'])
                    },
                    (err) => {
                         if (err) console.log(err)
                         alert('Ocurrio un error al grabar la pelicula')
                    }
               )
          } else {
               this.moviesService.actualizarPelicula(this.movie).then(
                    () => {
                         this.router.navigate(['/movies'])
                    },
                    (err) => {
                         if (err) console.log(err)
                         alert('Ocurrio un error al actualizar la pelicula')
                    }
               )
          }
     }

}

export interface Movie {
     _id: string, titulo: string, generos_id: Genero, sinopsis: string
}
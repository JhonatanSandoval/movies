import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable()
export class MoviesService {
  
  constructor(
    private http: HttpClient,
    private constants: ConstantsService
  ){ }

     listaPeliculas( ){
     return this.http.get(`${ this.constants.baseUrl }/peliculas`, this.constants.headersRequest ).toPromise();
     }

     detallePelicula(pelicula_id) {
          return this.http.get(`${this.constants.baseUrl}/peliculas/${pelicula_id}`, this.constants.headersRequest ).toPromise()
     }

     agregarPelicula(pelicula) {
          return this.http.post(`${this.constants.baseUrl}/peliculas`, pelicula, this.constants.headersRequest ).toPromise()
     }

     actualizarPelicula(pelicula) {
          return this.http.put(`${this.constants.baseUrl}/peliculas`, pelicula, this.constants.headersRequest ).toPromise()          
     }

     eliminarPelicula(pelicula_id) {
          return this.http.delete(`${this.constants.baseUrl}/peliculas/${pelicula_id}`, this.constants.headersRequest ).toPromise()
     }
}

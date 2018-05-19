import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { AuthService } from './auth.service';

@Injectable()
export class GenerosService {

  constructor(
    private http: HttpClient,
    private constants: ConstantsService,
  ) {
       
  }

  addNewGenero( genero: object){
    return this.http.post(`${this.constants.baseUrl}/generos`, genero, this.constants.headersRequest).toPromise();
  }

  updateGenero( genero: object){
    return this.http.put(`${this.constants.baseUrl}/generos`, genero, this.constants.headersRequest ).toPromise();
  }

  listGeneros( ){
    return this.http.get(`${this.constants.baseUrl}/generos`, this.constants.headersRequest).toPromise();
  }

  eliminarGenero( id:string ){
    return this.http.delete(`${this.constants.baseUrl}/generos/${id}`, this.constants.headersRequest).toPromise();
  }

  showGenero( id: string ){
    return this.http.get(`${this.constants.baseUrl}/generos/${id}`, this.constants.headersRequest).toPromise();
  }

}

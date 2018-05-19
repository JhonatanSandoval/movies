import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'

@Injectable()
export class AuthService {

     private httpHeaders: HttpHeaders

     constructor(
          private http: HttpClient,
          private constants: ConstantsService
     ) { }

     get token() {
          return localStorage.getItem('token')
     }

     login(credenciales: Credencial) {
          let btoaParams = btoa(credenciales.email+':'+credenciales.password)

          this.httpHeaders = new HttpHeaders({
               'Authorization': `Basic ${btoaParams}`
          })

          return this.http
               .post(`${this.constants.baseUrl}/auth`, {}, {headers: this.httpHeaders})
               .toPromise()
     }

     logout() {
          localStorage.removeItem('token')
     }

     isLogged() {
          return tokenNotExpired()
     }

     infoUsuario() {
          let token = localStorage.getItem('token')
          if (!token) return null
          return new JwtHelper().decodeToken(token)
     }

}

interface Credencial {
     email: string,
     password: string
}
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConstantsService {

  constructor() { }

  get baseUrl(){
    return 'https://movies-backend-academia.herokuapp.com';
  }

  get headersRequest() {
     return {
          headers: new HttpHeaders({
               'Authorization': localStorage.getItem('token')
          })
     }
  }

}

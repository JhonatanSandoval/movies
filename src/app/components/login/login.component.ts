import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     constructor(
          private authService: AuthService,
     ) { }

     ngOnInit() {
     }

     signIn(data) {
          console.log('form data', data);
          this.authService.login(data).then(
               (rs: Token) => {
                    console.log('rs', rs)
                    localStorage.setItem('token', rs.token) 
               },
               (err) => {
                    console.log('err', err)
               }
          )
     }  

}

interface Token {
     token: string
}

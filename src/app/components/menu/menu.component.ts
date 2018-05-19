import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

     usuario: Usuario

  constructor(
       public authService: AuthService
  ) { }

  ngOnInit() {
       this.usuario = this.authService.infoUsuario()
  }

}

interface Usuario {
     _id: string,
     nombres: string,
     apellidos: string,
     email: string
}
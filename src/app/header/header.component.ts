import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component(
  {
    selector: 'app-header',
    templateUrl: './header.component.html'
  }
)
export class HeaderComponent {
  title:string = 'App Angular'

  constructor( private router: Router ){

  }

  logout(): void{
    // let username = this.authService.usuario.username;
    // this.authService.logout();
    swal.fire('Logout', `Has cerrado sesión con éxito!`, 'success');
  }
}

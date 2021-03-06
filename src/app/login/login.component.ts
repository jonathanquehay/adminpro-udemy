import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  auth2:any;
  constructor(public router:Router, public _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.googleInit();
  }

googleInit(){
  gapi.load('auth2', ()=>{
    this.auth2 = gapi.auth2.init({
      client_id:'472535040243-fnlba6fchvracc8i31vk13ofj3llaqgf.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'profile email'
    });
    this.attachSignin(document.getElementById('btnGoogle'));
  });
}

attachSignin(element){
  this.auth2.attachClickHandler(element, {},(googleUser)=>{
    let profile = googleUser.getBasicProfile();

    let token = googleUser.getAuthResponse().id_token;
    this._usuarioService.loginGoogle(token)
      .subscribe(() => this.router.navigate(['/dashboard']));
  });
}

  ingresar(forma:NgForm){

    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']);
  }

}

import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { USERMOCK } from '../mocks/mock.user';
import * as crypto from "crypto-js"
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  usuario:Usuario={}
  datosSessionUsuario = new BehaviorSubject<Usuario>(this.usuario)
  constructor(
    private router: Router
  ) {}

  login(usuario: Usuario): Promise<Usuario> {
    //console.log("Login con usuario json "+JSON.stringify(usuario));
    let mockUser = USERMOCK;
    let usuarioEncontrado!: Usuario;
    mockUser.forEach((user: Usuario) => {
      if (
        user['email'] === usuario.email &&
        user['passWord'] === usuario.passWord
      ) {
        usuarioEncontrado = user;
      }
    });
    return Promise.resolve(usuarioEncontrado);
  }

  obtenerUsuarioSession():Observable<Usuario>{
    //this.obtenerDatosSession()
    return this.datosSessionUsuario.asObservable()
  }
  refrescarDatosSession(usuario:Usuario){
    this.datosSessionUsuario.next(usuario);
  }
  guardarSessionLocalStorage(usuarioSession: Usuario):void {
    sessionStorage.clear();
    let datosSession = this.getItemLocalStorage(); 
    if(datosSession){
      usuarioSession.sesionActiva = true
    }
   
      const usuarioJson = JSON.stringify(usuarioSession);
      console.log(usuarioJson) 
      localStorage.setItem('session_usuario', usuarioJson);
   
    this.obtenerDatosSession()
   
  }
  getItemLocalStorage(){
    let datosSession = String(localStorage.getItem('session_usuario'));
    return datosSession;
  }
  obtenerDatosSession(){
    
    let datosSessionString = this.getItemLocalStorage(); 
    //console.log(datosSessionString)
    let datosSessionObject= JSON.parse(datosSessionString);
    let datos:Usuario={
      id:datosSessionObject.id,
      email:datosSessionObject.email,
      nombre:datosSessionObject.nombre,
      apellido:datosSessionObject.apellido,
      sesionActiva:datosSessionObject.sesionActiva

    }
    //console.log(datos.sesionActiva)
    this.refrescarDatosSession(datos);
    return datos;
    // this.datosSessionUsuario;

      
  }

  encriptarClave(texto:string):string{
    let claveEncrip= crypto.MD5(texto).toString()
    return claveEncrip
  }
  cerrarSession(){
    sessionStorage.removeItem("session");
    this.refrescarDatosSession({})
    this.router.navigate(['login']);
    console.log('cerrando session',this.usuario)
  }
}

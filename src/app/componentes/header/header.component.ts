import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sessionActiva:boolean | undefined = false;
  nombreUsuario: string | undefined;
  apellidoUsuario: string | undefined;
  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.loginService.obtenerUsuarioSession().subscribe((datos:Usuario)=>{
      this.sessionActiva= datos.sesionActiva; 
      this.nombreUsuario = datos.nombre 
      this.apellidoUsuario = datos.apellido 
      console.log('Header sesion activa'+this.sessionActiva)
  })
    
  }
  cerrarSession(){
    console.log("Cerrando sesion")
    this.loginService.cerrarSession();
  }
}

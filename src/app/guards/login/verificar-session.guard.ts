import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarSessionGuard implements CanActivate {
  constructor(
    private router:Router,
    private loginService: LoginServiceService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let sessionActiva = this.loginService.obtenerDatosSession()
      if(sessionActiva.sesionActiva)
      {
        return true
      }else{
        this.router.navigate(['/'])
        return false
      }
      //return false

      
  }
  
}

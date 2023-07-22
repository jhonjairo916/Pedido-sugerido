import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }
  get formControls() {
    return this.formLogin.controls;
  }
  login() {
    let usuario: Usuario = {};
    usuario.email = this.formControls['email'].value;
    usuario.passWord = this.loginService
      .encriptarClave(this.formControls['passWord'].value)
      .toString();
    this.loginService
      .login(usuario)
      .then((res) => {
        console.log('Bienvenido', res.nombre);
        this.loginService.guardarSessionLocalStorage(res);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log;
      });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error404/error404.component';
import { VerificarSessionGuard } from './guards/login/verificar-session.guard';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {
    path:'',
    pathMatch:'full',//match with empty
    redirectTo:'/'
  },
  {path:'login',component:LoginComponent},
  {path:'pedido',
    loadChildren:()=>import('./pedidos/pedidos.module').then(m=>m.PedidosModule)
  },
  {
     path:'producto',canActivate:[VerificarSessionGuard],
     loadChildren:()=>import('./producto/productos.module').then(p=>p.ProductosModule)
  },
  {

    path:'error-404',component:Error404Component
  },
  {path:'**',redirectTo:'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

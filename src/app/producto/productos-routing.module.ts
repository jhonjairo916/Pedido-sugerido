
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { VerificarSessionGuard } from '../guards/login/verificar-session.guard'; 


const routes: Routes =[
    {
        path:'crear_producto',component:CrearProductoComponent
    },
    {
        path:'listar_producto',component:ListarProductoComponent
    },
    {
        path:'editar_producto',component:EditarProductoComponent
    },
    {
        path:'**',redirectTo:"/404"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule{ }
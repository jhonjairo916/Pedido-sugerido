
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from '../producto/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';

const routes: Routes =[
    {
        path:'crear_producto',component:CrearProductoComponent
    },
    {
        path:'listar_producto',component:ListarProductoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidosRoutingModule{ }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import {HttpClientModule} from '@angular/common/http'
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { VerificarSessionGuard } from '../guards/login/verificar-session.guard';



@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //FlashMessagesModule.forRoot()//If this module is not imported the component is blocked
    ]
})
export class ProductosModule { }

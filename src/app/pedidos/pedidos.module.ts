import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()//If this module is not imported the component is blocked
    ]
})
export class PedidosModule { }

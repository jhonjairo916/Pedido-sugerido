import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import {HttpClientModule} from '@angular/common/http'
import { CrearProductoComponent } from './crear-producto/crear-producto.component';



@NgModule({
  declarations: [
    CrearProductoComponent
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

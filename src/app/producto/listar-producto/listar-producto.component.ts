import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { debounceTime, empty, filter, map, Observable, of } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
  buscador: string;
  productos: Producto[] = [];
 
  constructor(
    private productoService: ProductoService,
    private fMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
  }
  buscarProducto() {
    let productoE: Producto[]=[]
    this.productos = this.productoService.productos

    this.productoService.buscarProducto(this.buscador)
    .subscribe(((productoEncontrado:Producto[])=>
    productoEncontrado.map((pr:Producto)=>{
      if(pr.desProducto?.toUpperCase().search(this.buscador.toUpperCase())!= -1){
        productoE.push(pr)
      }
      console.log(productoE)
    })))
    this.productos = productoE//The matches are assgined to the array of object this.productos
   
    /*  let productoEncontrado: Producto[]=[];
    this.productos= this.productoService.productos
      this.productos.map((value:Producto)=>{
          if (value.desProducto?.toUpperCase()?.search(this.buscador.toUpperCase()) != -1) {
            productoEncontrado.push(value);//Its created array with the items founded
          }
      })  
      if(productoEncontrado.length === 0){
        this.fMessages.show(`No existen concidencias de <i>${this.buscador}</i>`,{
          cssClass:'alert-danger',timeout:1000
        })
      }
      this.productos= productoEncontrado */
  }
}

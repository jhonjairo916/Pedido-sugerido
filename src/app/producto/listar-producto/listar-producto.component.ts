import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import {  map, Observable, of } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  buscador:string;
  productos: Producto[]=[]
  productos$=of(this.productos);
  producto$ = new Observable()
  constructor(
    private productoService: ProductoService,
    private fMessages:FlashMessagesService
  ) 
  {
    this.productos = this.productoService.productos;  
    this.productos$=of(this.productoService.productos)
    this.producto$=this.productos$.pipe(
      map((productos)=>productos
      .map((producto)=>
      {
        if(producto.desProducto?.search('Arroz')!= -1){
          console.log(producto)
        }
      }))) 
  }

  ngOnInit(): void {
  }
  buscarProducto(){
    //this.productos$.subscribe(console.log)
    this.producto$.subscribe(console.log)

 
  
/*    this.productoService.buscarProducto('dd')
  .subscribe((res)=>{
      console.log(res)
   }); */
   
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
//
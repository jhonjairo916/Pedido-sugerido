//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable, of, pipe } from 'rxjs';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[]=[
    {
      desProducto:'Arroz',
      stockUmc:10,
      stockUmv:1,
      numCarasProd:2,
      costoProd:1200
    },
    {
      desProducto:'Leche',
      stockUmc:10,
      stockUmv:1,
      numCarasProd:2,
      costoProd:3400
    },
    {
      desProducto:'Aceite',
      stockUmc:10,
      stockUmv:1,
      numCarasProd:2,
      costoProd:8900
    },
    {
      desProducto:'Panela',
      stockUmc:10,
      stockUmv:1,
      numCarasProd:2,
      costoProd:2400
    }
  ]
  eventProducto = new EventEmitter<Producto[]>()
  produc = new BehaviorSubject(this.productos);
  produc$ = this.produc.asObservable();
  constructor(
    
  ) 
  { 
    //this.produc.next(this.productos)
    this.eventProducto.emit(this.productos);
  }

  guardarProducto(producto: Producto){
    this.productos.push(producto);
    
  }
  buscarProducto(dato:string)
  {
   this.produc.next(this.productos)
   return this.produc$.pipe(
    map((res: Producto[])=>({
      datos:res
    })))
     
  }
  
}
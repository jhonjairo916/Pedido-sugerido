//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable, of, pipe } from 'rxjs';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit{
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
  ];
  produc=of(this.productos);
  produc$ = new Observable()
  //eventProducto = new EventEmitter<Producto[]>()
  /* produc = new BehaviorSubject<Producto[]>(this.productos);
  produc$ = this.produc.asObservable();  
 */
  constructor(
    
  ) 
  { 
    
/*     this.producto$= this.productos$.pipe(
      map((productos)=>productos
      .map((producto)=>
      {
        if(producto.desProducto?.search('Arroz')!= -1){
         prod:producto
        }
      })))  */
    //this.produc.next(this.productos)
    
    //this.eventProducto.emit(this.productos);
    //this.productos$=of(this.productos)
    
    
  }
  ngOnInit(): void {
    
  }

  guardarProducto(producto: Producto){
    this.productos.push(producto);
    
  }
  buscarProducto(dato:string)
  {
    //this.produc$ = this.produc.asObservable();
    //this.produc.next(this.productos)

    return this.produc$.pipe(map((productos:any)=>productos.map((producto:any)=>{console.log})))
   /*  return this.produc$.pipe(
      map((productos)=>productos
      .map((producto)=>
      {
        if(producto.desProducto?.search('Arroz')!= -1){
         prod:producto
        }
      })))  */
      //return this.producto$
   /* this.produc.next(this.productos)
   return this.produc$.pipe(
    map((res: Producto[])=>({
      datos:res
    }))) */
     
  }
  
}
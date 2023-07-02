//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, pipe, Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { Producto } from '../modelos/producto.model';
import { productoMock } from '../mocks/mocks.producto';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { error } from 'console';


@Injectable({
  providedIn: 'root',
})
export class ProductoService implements OnInit {
  producto:Producto;
  productos = productoMock //Arreglo para simular productos
  productos$ = of(this.productos);
  //producto$ = new Observable<Producto[]>();

  alerta = new Subject();
  alertaObs$ = this.alerta.asObservable()
  //eventProducto = new EventEmitter<Producto[]>()
  //TODO
  //Probar con BehaviorSubject

  /* produc = new BehaviorSubject<Producto[]>(this.productos);
  produc$ = this.produc.asObservable();  
 */
  constructor(private router:Router) {
    //this.eventProducto.emit(this.productos);
    //this.productos$=of(this.productos)
  }
  ngOnInit(): void {}

  obtenerNotificacion(message: string, time: number = 1000){
    this.alerta.next({message ,time});
    return this.alertaObs$
  }
  guardarProducto(producto: Producto) {
    this.productos.push(producto);
  }
  actualizarProducto(id:string| undefined, producto:Producto){
      const index = this.productos.findIndex(prod => prod.idProducto === id);
      this.productos[index] = producto;
  }
  buscarProductos() {
    //let productoE: Producto[] = [];
     return this.productos$.pipe(
      debounceTime(1000),
      map((productos: Producto[]) => {
        return productos;
      })
    );
    //return this.producto$;
  }
 /*  obtenerUltimoRegistro(){
    return this.producto$.pipe(map((producto:Producto[])=>{return producto.length}))
  } */
 /*  obtenerUltimoRegistro():Promise<number>{
    return Promise.resolve(this.productos.length)
  } */
  buscarProducto(id:Producto):Promise<Producto>{
    let prod:Producto
    let pr = this.productos.indexOf(id)

    prod=this.productos[pr]
    //console.log(pr,'-----')
   return Promise.resolve(prod);
  }
 /*  buscarProducto(id:Producto){
    let prod:Producto
    let pr = this.productos.indexOf(id)

    prod=this.productos[pr]
    //console.log(pr,'-----')
   return prod
  } */
  eliminarProducto(index: number ) {
   return this.productos.splice(index,1);
}
}

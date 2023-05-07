//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, pipe, Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService implements OnInit {
  producto:Producto;
  productos: Producto[] = [
    {
      idProducto:"1",
      desProducto: 'Arroz',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 1200,
    },
    {
      idProducto:"2",
      desProducto: 'Leche',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 3400,
    },
    {
      idProducto:"3",
      desProducto: 'Aceite',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 8900,
    },
    {
      idProducto:"4",
      desProducto: 'Panela',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 2400,
    },
  ];
  productos$ = of(this.productos);
  producto$ = new Observable<Producto[]>();

  alerta = new Subject();
  alertaObs$ = this.alerta.asObservable()
  //eventProducto = new EventEmitter<Producto[]>()
  //TODO
  //Probar con BehaviorSubject

  /* produc = new BehaviorSubject<Producto[]>(this.productos);
  produc$ = this.produc.asObservable();  
 */
  constructor() {
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
  buscarProductos() {
    //let productoE: Producto[] = [];
     this.producto$ = this.productos$.pipe(
      debounceTime(1000),
      map((productos: Producto[]) => {
        return productos;
      })
    );
    return this.producto$;
  }
  obtenerUltimoRegistro(){
    return this.producto$.pipe(map((producto:Producto[])=>{return producto.length}))
  }
  buscarProducto(id:Producto){
    let pr = this.productos.indexOf(id)
   return this.productos[pr];
  }

}

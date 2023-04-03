//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, pipe } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService implements OnInit {
  productos: Producto[] = [
    {
      desProducto: 'Arroz',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 1200,
    },
    {
      desProducto: 'Leche',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 3400,
    },
    {
      desProducto: 'Aceite',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 8900,
    },
    {
      desProducto: 'Panela',
      stockUmc: 10,
      stockUmv: 1,
      numCarasProd: 2,
      costoProd: 2400,
    },
  ];
  productos$ = of(this.productos);
  producto$ = new Observable<Producto[]>();
  alerta = new BehaviorSubject<string>("");
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

  obtenerNotificacion(message:string){
    this.alerta.next(message);
    return this.alertaObs$
  }
  guardarProducto(producto: Producto) {
    this.productos.push(producto);
  }
  buscarProducto() {
    //let productoE: Producto[] = [];
     this.producto$ = this.productos$.pipe(
      debounceTime(1000),
      map((productos: Producto[]) => {
        return productos;
      })
    );
    return this.producto$;
  }
  notificarAlerta(message:string){

  }
}

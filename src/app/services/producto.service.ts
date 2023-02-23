//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable, of, pipe } from 'rxjs';
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

  guardarProducto(producto: Producto) {
    this.productos.push(producto);
  }
  buscarProducto(buscador: string) {
    //let productoE: Producto[] = [];
    return (this.producto$ = this.productos$.pipe(
      map((productos: Producto[]) => {
        return productos;
      })
    ));
  }
}

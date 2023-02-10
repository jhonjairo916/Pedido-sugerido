import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { debounceTime, filter, map, Observable, of } from 'rxjs';
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
  productos$ = of(this.productos);
  producto$ = new Observable();
  constructor(
    private productoService: ProductoService,
    private fMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
    let productoEncontrado:Producto[]=[]
    this.producto$ = of(this.productoService.productos).pipe(
      map((prod: Producto[]) =>
        prod.map((pr: Producto) => {
          if (pr.desProducto?.search('Arroz') != -1) {
            productoEncontrado.push(pr)
            return productoEncontrado;
          }
          return null;
        })
      )
    );
    this.producto$.subscribe(console.log);

    //this.producto$.subscribe(console.log);
    /* this.productos$.pipe(filter((data:any)=>data>0),
    map(val=>console.log(val))) */
  }
  buscarProducto() {
    //this.producto$.subscribe(console.log);
    // this.productoService.buscarProducto('Arroz').subscribe(console.log);
    //this.productoService.producto$.subscribe(console.log)
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

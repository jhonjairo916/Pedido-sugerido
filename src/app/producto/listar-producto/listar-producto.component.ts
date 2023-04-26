import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { debounceTime } from 'rxjs/operators';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
 // buscador: string;
  //@ViewChild('no_match') no_match:Element
  productos: Producto[] = [];
  divMessage: boolean = false;
  alerta: string = '';

  constructor(
    private productoService: ProductoService,
    //private fMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
  }
  buscarProducto(event:string) {
    let productoE: Producto[] = [];
    this.productoService
      .buscarProducto()
      .subscribe((productoEncontrado: Producto[]) =>
        productoEncontrado.map((pr: Producto) => {
          if (
            pr.desProducto?.toUpperCase().search(event.toUpperCase()) != -1
          ) {
            productoE.push(pr);
          }
        })
      );
    console.log(productoE);
    this.productos = productoE; //The matches are assgined to the array of object this.productos
    //if there´s not matches....
    if (productoE.length === 0) {
      this.divMessage = true;
      this.productoService
        .obtenerNotificacion(`El producto ${event} no esta en lista`,2000)
        .subscribe((res: any) => {
          this.alerta = res.message;
          setTimeout(() => {
            this.divMessage = false;
          }, res.time);
        });

      // this.fMessages.show(`No existen concidencias de <i>${this.buscador}</i>`,{
      //   cssClass:'alert-warning',timeout:1000
      // })
    }
   
  }
  eliminarProducto(producto:string){
      alert(producto)
  }
}


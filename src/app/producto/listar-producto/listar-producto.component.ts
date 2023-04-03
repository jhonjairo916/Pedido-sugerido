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
  buscador: string;
  //@ViewChild('no_match') no_match:Element
  productos: Producto[] = [];
  message: boolean = false;
  alert: string = '';

  constructor(
    private productoService: ProductoService,
    private fMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
  }
  buscarProducto() {
    // alert(this.no_match.innerHTML.length)
    let productoE: Producto[] = [];

    //let cont:number= 0;
    // this.productos = this.productoService.productos
    this.productoService
      .buscarProducto()
      .subscribe((productoEncontrado: Producto[]) =>
        productoEncontrado.map((pr: Producto) => {
          if (
            pr.desProducto?.toUpperCase().search(this.buscador.toUpperCase()) !=
            -1
          ) {
            // this.message= false
            productoE.push(pr);
          }
        })
      );
    console.log(productoE);
    this.productos = productoE; //The matches are assgined to the array of object this.productos
    if (productoE.length === 0) {
      this.message = true;
      this.productoService
        .obtenerNotificacion(`El producto ${this.buscador} no esta en lista`)
        .subscribe((res: any) => {
          this.alert = res;
          setTimeout(() => {
            this.message = false;
          }, 2000);
        });

      // this.fMessages.show(`No existen concidencias de <i>${this.buscador}</i>`,{
      //   cssClass:'alert-warning',timeout:1000
      // })
    }
    //console.log(this.cont)
  }
}

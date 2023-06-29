import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
  /* nombreProd:string|undefined;
  costoProd:number|undefined=0; */
  //@ViewChild('costoProd') costoProd:ElementRef
  productos: Producto[] = [];
  divMessage: boolean = false;
  alerta: string = '';
  //edit:boolean=false;
  pr:Producto;

  constructor(
    private productoService: ProductoService,
    private route: Router
    //private fMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
    
    //console.log("Listado de productos",this.productos);
  }
  //The matches of producto are filtered
  buscarProducto(eventBuscador:string) {
    let productoE: Producto[] = [];
    this.productoService
      .buscarProductos()
      .subscribe((productoEncontrado: Producto[]) =>
        productoEncontrado.map((pr: Producto) => {
          if (
            pr.desProducto?.toUpperCase().search(eventBuscador.toUpperCase()) != -1
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
        .obtenerNotificacion(`El producto ${eventBuscador} no esta en lista`,2000)
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
  //Este producto aparecera en el modal para luego actualizar
   editarProducto(pro:Producto){
   // this.edit = true;
    let prod!:Producto
    //this.productoService.buscarProducto(pro).then(res=>{this.pr=res});
     prod = this.productoService.buscarProducto(pro)
     this.pr= prod
    //console.log(prod,'kkkkkk')
    /* let extrasNavigation: NavigationExtras={
      queryParams:{
        pr:prod
      }
    }
    this.route.navigate([`producto/editar_producto`],extrasNavigation) */
    

  }
}


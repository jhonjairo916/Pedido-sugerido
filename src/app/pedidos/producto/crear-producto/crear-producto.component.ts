import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'flash-messages-angular';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productos: Producto[]=[]
  producto: Producto={
    desProducto:'',
    costoProd:0
  }
  constructor(
    //private flashMessages: FlashMessagesService
    private productoService: ProductoService,
    private router: Router
  ) 
  {  }
  
  ngOnInit(): void {
  }
  guardarProducto(form:NgForm){
    this.producto.desProducto= form.value.desProducto;
    this.producto.costoProd= form.value.costoProd;
    if(form.valid){
      this.productoService.guardarProducto(this.producto);
      this.router.navigate(['pedido/listar_producto'])
    }
     /* if(!form.valid){
      this.flashMessages.show('Valide el formulario',{
        cssClass:'alert-danger',timeout:4000
      })
    } */
  }

  
}

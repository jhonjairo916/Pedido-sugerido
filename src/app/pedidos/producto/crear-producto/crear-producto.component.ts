import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { FlashMessagesService } from 'flash-messages-angular';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productos: Producto[]=[]
  producto: Producto={
    idProducto:'',
    desProducto:'',
    costoProd:0
  }
  productoLength:number=0
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
    this.productoService.buscarProducto().subscribe(
      (produc)=>
      {
       this.productoLength =  produc.length
      })
    //TODO: Find the mayor number in idProducto in order to assign a new id to the producto to save
    if(form.valid){
      this.producto.idProducto = (this.productoLength + 1).toString()
      this.productoService.guardarProducto(this.producto);
      Swal.fire(
        `Registration of ${this.producto.desProducto} recorded succesfully`,
        'Vover a cargar el listado?',
        'success'
      )
      this.router.navigate(['pedido/listar_producto'])
 
    }
     /* if(!form.valid){
      this.flashMessages.show('Valide el formulario',{
        cssClass:'alert-danger',timeout:4000
      })
    } */
  }
//edit  with angular and mysql? 
  
}

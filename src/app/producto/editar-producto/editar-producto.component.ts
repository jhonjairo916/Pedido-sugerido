import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit,OnChanges {
  nombreProd:string |undefined ;
  costoProd:number | undefined;
  @Input() pr:Producto;
  constructor() { }

  ngOnInit(): void {
   //console.log(this.nombreProd)
  }
  ngOnChanges(): void {
    console.log(this.pr)
    this.nombreProd = this.pr.desProducto
    this.costoProd = this.pr.costoProd
  }

}

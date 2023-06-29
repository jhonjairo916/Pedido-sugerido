import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit, OnChanges {
  @ViewChild('botonCerrar') botonModal: ElementRef;
  producto: Producto = {
    idProducto: '',
    desProducto: '',
    costoProd: 0,
  };
  /* id: string | undefined;
  nombreProd:string | undefined ;
  costoProd:number | undefined; */
  @Input() pr: Producto;
  @Input() pr2:string
  //index?:number;
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    //console.log('ngOnInit.....');

    /* console.log(history.state.pr, 'Este el el State');
    if (history.state.pr) {
      this.producto.idProducto = history.state.pr.idProducto;
      this.producto.desProducto = history.state.pr.desProducto;
      this.producto.costoProd = history.state.pr.costoProd;
    } */
  }
  ngOnChanges(changes: SimpleChanges): void {
    //The product recived is assigned to the producto objecto in order to update it later
    //console.log(changes['desProducto'].currentValue,'....')
    if(changes)
    {
      let key=Object.keys(changes)[0];
      console.log("kkkk",key)
      //Its verified the data that arrives by input is obtained it´s currentValue and added to this.producto array
      switch(key){
        case "pr":
          this.producto= changes[key].currentValue
          console.log("cambios",changes[key].currentValue)
          break;
        }
    }
    /* this.producto.idProducto = this.pr.idProducto;
    this.producto.desProducto = this.pr.desProducto;
    this.producto.costoProd = this.pr.costoProd; */
    //console.log("Aqui",this.producto.idProducto)
  }
  actualizarProducto(id: string | undefined): void {
    //this.pr={}
    this.productoService.actualizarProducto(id, this.producto);
    this.botonModal.nativeElement.click();
    //console.log(this.producto)
  }
}

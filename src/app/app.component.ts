import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pedidoSugerido';
  constructor(){
    this.Verificar()
  }
  Verificar()
  {
    if(this.title ==="pedidoSugerido"){
      return true;
    }
    return false
  }
}
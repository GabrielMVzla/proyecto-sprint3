import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styles: [
  ]
})
export class DirectivasComponent {

  valor: number = 1;
  mostrar: boolean = true;

  mostrarTabla(mensaje: boolean)
  {
    this.mostrar = mensaje;
  }
  
  enviarMensaje(mensaje: boolean){
    if(!this.mostrar)
      this.titulo = "MOSTRAR DATOS";
    else
      this.titulo = 'EJEMPLO DIRECTIVAS';
  }
  sumarValor(valor: number): void 
  {
    this.valor += valor;

    if(this.valor < 1) this.valor = 5;
    if(this.valor > 5) this.valor = 1;
  }

  estiloSwitch(cambio: number)
  {
    switch((cambio))
    {
      case 1: this.fondo = "btn-outline-primary  " ; break;
      case 2: this.fondo = "btn-outline-dark " ; break;
      case 3: this.fondo = "btn-outline-danger " ; break;
      case 4: this.fondo = "btn-outline-success " ; break;
      case 5: this.fondo = "btn-outline-info " ; break;
      default: this.fondo = " btn-secondary ";
    }
  }
  
  titulo:string = 'EJEMPLO DIRECTIVAS';
  fondo: string = "btn-outline-primary ";

}

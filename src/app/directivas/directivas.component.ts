import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styles: [
  ]
})
export class DirectivasComponent {
  title = 'practica-directivas';

  valor: number = 1;

  pruebaBool : boolean = true;
  prueba: string = "hola";

  mostrar: boolean = true;
  mostrarTabla(mensaje: boolean)
  {
    this.mostrar = mensaje;
  }
  
  sumarValor(valor: number): void 
  {
    this.valor += valor;

    if(this.valor < 1) this.valor = 5;
    if(this.valor > 5) this.valor = 1;
  }

  enviarMensaje(mensaje: boolean){
    if(!this.mostrar)
      this.titulo = "MOSTRAR DATOS";
    else
      this.titulo = 'EJEMPLO DIRECTIVAS';
  }

  ngOnChanges(changes: SimpleChanges): void{
    
    let cambio: number = changes.valor.currentValue;
    let txtColor = " text-white";
  
    switch(cambio)
    {
      case 1: this.fondo = "bg-primary" + txtColor; break;
      case 2: this.fondo = "bg-dark" + txtColor; break;
      case 3: this.fondo = "bg-danger" + txtColor; break;
      case 4: this.fondo = "bg-success" + txtColor; break;
      case 5: this.fondo = "bg-info" + txtColor; break;
      default: this.fondo = "text-dark bg-white";
    }
  }
  
  titulo:string = 'EJEMPLO DIRECTIVAS';
  fondo: string = "bg-primary";
  btnColor: string = 'btn-success';

}

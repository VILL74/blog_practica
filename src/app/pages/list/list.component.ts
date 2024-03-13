import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Publicacion } from '../../publicacion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() entrada: Publicacion = {} as Publicacion;
  @Output() emitEditEntrada = new EventEmitter<Publicacion>();
  
  constructor() { }
  editPublicacion(entrada: Publicacion) {
     this.emitEditEntrada.emit(entrada);
  }

}

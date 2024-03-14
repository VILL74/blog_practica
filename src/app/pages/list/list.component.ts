import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Publicacion } from '../../publicacion';
import { AppServiceService } from '../../app.service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() entrada: Publicacion = {} as Publicacion;
  @Output() emitEditEntrada = new EventEmitter<Publicacion>();
  constructor(private visibilityService: AppServiceService) { }
 
  
  editPublicacion(entrada: Publicacion) : void {
    this.emitEditEntrada.emit(entrada);
    this.visibilityService.toggleUpdateVisibility(true); 
    this.visibilityService.toggleCreateVisibility(false);
    this.visibilityService.toggleseeentraceVisibility(false);
    this.visibilityService.toggleListVisibility(false);
    
  }

  verpublicacion(entrada: Publicacion) : void {
    this.emitEditEntrada.emit(entrada);
    this.visibilityService.toggleseeentraceVisibility(true);
    this.visibilityService.toggleUpdateVisibility(false); 
    this.visibilityService.toggleCreateVisibility(false);
    this.visibilityService.toggleListVisibility(false);
    
    
  }

}

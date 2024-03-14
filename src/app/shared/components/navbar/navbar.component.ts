import { Component,EventEmitter,Output } from '@angular/core';
import { AppServiceService } from '../../../app.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  //@Output() showFormCreateEntradas: EventEmitter<void> = new EventEmitter<void>();
  @Output() buscarEntradas: EventEmitter<string> = new EventEmitter<string>();
  criterio: string = '';

  buscar() {
    this.buscarEntradas.emit(this.criterio);
  }

  //onMostrar() {
    //this.showFormCreateEntradas.emit();
  //}

  constructor(private visibilityService: AppServiceService) { }

  onMostrar(): void {
    this.visibilityService.toggleCreateVisibility(true);
    this.visibilityService.toggleListVisibility(false);
    this.visibilityService.toggleseeentraceVisibility(false);
    this.visibilityService.toggleUpdateVisibility(false); 
  }
}

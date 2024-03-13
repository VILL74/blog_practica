import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() showFormCreateEntradas: EventEmitter<void> = new EventEmitter<void>();
  @Output() buscarEntradas: EventEmitter<string> = new EventEmitter<string>();
  criterio: string = '';

  buscar() {
    this.buscarEntradas.emit(this.criterio);
  }

  onMostrar() {
    this.showFormCreateEntradas.emit();
  }
}

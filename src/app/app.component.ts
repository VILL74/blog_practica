import { Component } from '@angular/core';
import { Publicacion } from './publicacion';
import { AppServiceService } from './app.service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';
  mostrarEntradasOriginales: boolean = true;
  entradas: Publicacion [] = []
  entradasFiltradas: Publicacion[] = [];
  entrada: Publicacion = {} as Publicacion;

  createVisible$: Observable<boolean>;
  EditVisible$:Observable<boolean>;
  SeeEntraceVisible$: Observable<boolean>;
  Seelist$: Observable<boolean>;

  constructor(private visibilityService: AppServiceService) {
    this.createVisible$ = this.visibilityService.getCreateVisibilityStream();
    this.EditVisible$ = this.visibilityService.getUpdateVisibilityStream();
    this.SeeEntraceVisible$ = this.visibilityService.getseeentraceVisibilityStream();
    this.Seelist$ = this.visibilityService.getslistVisibilityStream();
  }

  
  
  onAddEntrada(newEntrada: Publicacion) {
    newEntrada.id = this.entradas.length + 1;
    this.entradas.push(newEntrada);
  }

  editEntrada(entrada: Publicacion) {
    this.entrada=entrada;
  }

  updateEntrada(updatedInfo: Publicacion) {
    const index = this.entradas.findIndex(entrada => entrada.id === updatedInfo.id);
    if (index !== -1) {
      this.entradas[index] = updatedInfo;
    }
  }

  buscarEntradas(criterio: string) {
    if (criterio.trim() === '') {
        // Si el criterio de búsqueda está vacío, se muestra las entradas originales
        this.mostrarEntradasOriginales = true;
    } else {
        // Lógica para buscar héroes filtrados...
        const criterioLower = criterio.toLowerCase();
        this.entradasFiltradas = this.entradas.filter(entrada =>
            entrada.title.toLowerCase().includes(criterioLower) ||
            entrada.description.toLowerCase().includes(criterioLower) ||
            entrada.date.toLowerCase().includes(criterioLower)||
            entrada.author.toLowerCase().includes(criterioLower)
        );
        // Cuando se realiza una búsqueda, oculta los héroes originales
        this.mostrarEntradasOriginales = false;
    }
}


}

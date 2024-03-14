import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Publicacion } from '../../publicacion';
import { AppServiceService } from '../../app.service.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  @Input() entrada: Publicacion = {} as Publicacion;

  constructor(private visibilityService: AppServiceService) {
  }

  
  verlista()  {
    this.visibilityService.toggleListVisibility(true);
    this.visibilityService.toggleseeentraceVisibility(false);
    this.visibilityService.toggleUpdateVisibility(false); 
    this.visibilityService.toggleCreateVisibility(false);
  }

}

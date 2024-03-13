import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../shared/components/alert/alert.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Output() addEntrada: EventEmitter<any> = new EventEmitter();
  newEntradaForm: FormGroup;

  constructor(private alertservice:AlertService) {
    this.newEntradaForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
      date: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    if (this.newEntradaForm.valid) {
      this.addEntrada.emit(this.newEntradaForm.value);
      console.log(this.newEntradaForm.value);
      this.resetNewEntrada();
    } else {
      this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true})
      console.log('El formulario no es válido');
    }
  }
 
  resetNewEntrada() {
    this.newEntradaForm.reset();
  }

 
}

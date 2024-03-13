import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Publicacion } from '../../publicacion';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  @Input() entrada: Publicacion = {} as Publicacion;
  @Output() updatedEntrada: EventEmitter<Publicacion> = new EventEmitter<Publicacion>();

  editEntradaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private alertservice:AlertService) {
    this.editEntradaForm = this.formBuilder.group({
      title: [this.entrada.title, [Validators.required, Validators.minLength(4)]],
      description: [this.entrada.description, [Validators.required, Validators.minLength(4)]],
      date: [this.entrada.date, Validators.required],
      author: [this.entrada.author, [Validators.required, Validators.minLength(4)]]
    });
    
  }
  
  ngOnInit(): void {
    this.llenarFormularioConDatosActuales();
  }

  llenarFormularioConDatosActuales() {
    if (this.entrada) {
      this.editEntradaForm.patchValue({
        title: this.entrada.title,
        description: this.entrada.description,
        date: this.entrada.date,
        author: this.entrada.author
      });
    }
  }

  
  onSubmit() {
    if (this.editEntradaForm.valid) {
      const updatedInfo: Publicacion = {
        ...this.entrada,
        title: this.editEntradaForm.value.title,
        description: this.editEntradaForm.value.description,
        date: this.editEntradaForm.value.date,
        author: this.editEntradaForm.value.author
      };
      this.updatedEntrada.emit(updatedInfo);
      this.resetEditEntrada();
    }else{
      this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true})
      console.log('El formulario no es válido');
    }
  }

  resetEditEntrada() {
    this.editEntradaForm.reset();
  }
}

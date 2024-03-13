import { Component } from '@angular/core';
import { AlertInterface } from './alert.interface';
import { AlertService } from './alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  alert:AlertInterface={message:'',show:false}

  constructor(private alertService:AlertService){}
  
  ngOnInit(): void{
  this.alertService.data$.subscribe((data:AlertInterface)=>{
   this.alert=data;
  });
  }
  
  hide(){
    this.alertService.hide()
  }
  
}

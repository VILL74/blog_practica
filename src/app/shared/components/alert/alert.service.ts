import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertInterface } from './alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private data= new BehaviorSubject<AlertInterface>({message:'',show:false});
  data$: Observable<AlertInterface>= this.data.asObservable();

  constructor() { }
  
  show(alert: AlertInterface): void {
    this.data.next(alert);
    setTimeout(() => {
      this.hide();
    }, 5000);
  }
  
  //show(alert:AlertInterface):void{
    //this.data.next(alert);
  //}

  hide():void{
    this.data.next({message:'',show:false});
  }
}

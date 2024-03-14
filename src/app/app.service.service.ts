import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private isCreateVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isUpdateVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isSeeentraceVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isListVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  toggleCreateVisibility(visible: boolean = true): void {
    this.isCreateVisibleSubject.next(visible);
  }

  toggleUpdateVisibility(visible: boolean = true): void {
    this.isUpdateVisibleSubject.next(visible);
  }

  toggleseeentraceVisibility(visible: boolean = true): void {
    this.isSeeentraceVisibleSubject.next(visible);
  }

  toggleListVisibility(visible: boolean = true): void {
    this.isListVisibleSubject.next(visible);
  }

  getCreateVisibilityStream() {
    return this.isCreateVisibleSubject.asObservable();
  }

  getUpdateVisibilityStream() {
    return this.isUpdateVisibleSubject.asObservable();
  }

  getseeentraceVisibilityStream() {
    return this.isSeeentraceVisibleSubject.asObservable();
  }

  getslistVisibilityStream() {
    return this.isListVisibleSubject.asObservable();
  }
}


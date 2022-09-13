import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<string>(); //Subject is kind of a source from which messages are sent to components.
  
  teacherMessage = this._teacherMessageSource.asObservable(); //expose the subject as observable.

  constructor() { }


  //Method which accepts message from the teacher component and pushes that method using observable.
  sendMessgae(message:string)
  {
    this._teacherMessageSource.next(message); 
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ErrorMessage = { title: string, message: string, hideDialog?: boolean };

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorBS: BehaviorSubject<ErrorMessage> = new BehaviorSubject(null);
  private readonly errorOB: Observable<ErrorMessage> = this.errorBS.asObservable();

  set error(error: ErrorMessage) {
    this.errorBS.next(error);
  }

  get error(): ErrorMessage {
    return this.errorBS.value;
  };

  get errorAsObservable(): Observable<ErrorMessage> {
    return this.errorOB;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderBS: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly loaderOB: Observable<boolean> = this.loaderBS.asObservable();

  set loader(loader: boolean) {
    this.loaderBS.next(loader);
  }

  get loader(): boolean {
    return this.loaderBS.value;
  };

  get loaderAsObservable(): Observable<boolean> {
    return this.loaderOB;
  }
}

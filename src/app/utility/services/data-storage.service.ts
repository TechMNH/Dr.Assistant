import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DoctorSignupForm, PatientSignupForm } from '../models/signup';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataStorage {

constructor(private http : HttpClient) { }

private doctorData : DoctorSignupForm;
private patientData : PatientSignupForm;
// public doctorBehaviorSubject : BehaviorSubject<DoctorSignupForm | {}> = new BehaviorSubject({});
// public patientBehaviorSubject : BehaviorSubject<PatientSignupForm | {}> = new BehaviorSubject({});

// set doctorData(data : DoctorSignupForm) {
//     this.doctorBehaviorSubject.next(data);
// }
// set partientData(data : PatientSignupForm) {
//     this.patientBehaviorSubject.next(data);
// }
// get doctorData() {
//     return this.doctorBehaviorSubject.value
// }
// get partientData() {
//     this.patientBehaviorSubject.next(data);
// }

storeData(data) {
    return this.http.post("assest/signup", data).pipe(map(
        (res : any) =>{
            return res;
        }
    ))
}

getData() : Observable<DoctorSignupForm> {
    return this.http.get("assets/signupdata.json").pipe(map((res : any) =>{  
       return this.doctorData;
    }));
}

}
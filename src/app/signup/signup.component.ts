import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorSignupForm, PatientSignupForm } from '../utility/models/signup';
import { DataStorage } from '../utility/services/data-storage.service';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private dataStoreService : DataStorage) { }

  activeTab = 1;
  doctorSignupData : DoctorSignupForm;
  patientSignupData : PatientSignupForm;
  doctorFormGroup : FormGroup;

  ngOnInit(): void {
    this.doctorFormGroup = new FormGroup({
      firstName: new FormControl('A', Validators.required),
      lastName: new FormControl('R', Validators.required),
      licence: new FormControl('V2', Validators.required),
      emailID: new FormControl('c@c.c', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('djhdj', Validators.compose([Validators.required, Validators.minLength(8)])),
      confirmPassword: new FormControl('djhdj', Validators.compose([Validators.required, Validators.minLength(8)])),
    });
  }

  openActiveTab(tabNo) {
    this.activeTab = tabNo;
    console.log(this.activeTab)
    if(this.activeTab == 1) {}
  }

  submitDoctorDetails() { 
    this.doctorSignupData = this.doctorFormGroup.value;
    this.dataStoreService.storeData(this.doctorSignupData).subscribe((res : any) =>{
      window.alert("Sign up was successful");
    });
  }

  submitPatientDetails() {
    console.log(this.patientSignupData);
    
  }

}

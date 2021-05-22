import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorSigninForm } from '../utility/models/signin';
import { DataStorage } from '../utility/services/data-storage.service';

@Component({
  selector: 'lib-doctor',
  templateUrl: './doctor.component.html',
  styles: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {

  signinFormGroup;
  signinData : DoctorSigninForm;

  constructor(private router: Router, private dataStoreService: DataStorage) { }

  ngOnInit(): void {
    this.signinFormGroup = new FormGroup(
      {
        emailID : new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    );
  }

  submitSignInData() {
    this.signinData = this.signinFormGroup.value;
    this.signinData.doctor = true;
    // this.dataStoreService.storeData(this.signinData).subscribe((res : any) =>{
      this.router.navigateByUrl('doctor/prescription');
    // });
  }

  issuePrescription() {
    this.router.navigateByUrl('/prescription');
  }
}

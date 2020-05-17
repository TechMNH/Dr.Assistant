import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-doctor',
  template: `
    <p>
      doctor works!
    </p>
  `,
  styles: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  issuePrescription() {
    this.router.navigateByUrl('/prescription');
  }
}
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'doctor-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
  @Input() doctorID;

  constructor() { }

  ngOnInit(): void {
  }

}

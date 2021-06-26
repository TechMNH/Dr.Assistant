import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

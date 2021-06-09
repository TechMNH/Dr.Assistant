import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorMessage } from 'src/app/utility/services/error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() public error: ErrorMessage = { title: 'Error Occurred', message: 'Unknown Error' };
  @Output() public closeBtn: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}

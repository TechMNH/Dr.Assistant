import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public randomLoader: number = Math.ceil(Math.random() * (15 - 1) + 1);

  constructor() { }

  ngOnInit(): void {
  }

}

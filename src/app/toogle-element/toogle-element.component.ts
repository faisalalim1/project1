import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toogle-element',
  templateUrl: './toogle-element.component.html',
  styleUrls: ['./toogle-element.component.css']
})
export class ToogleElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display = true;
  toogle()
  {
    this.display = ! this.display
  }

}

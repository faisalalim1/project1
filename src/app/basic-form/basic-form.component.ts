import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData:any={};
  getData(data:NgForm)
  {
    console.log(data);
    this.userData = data;
    
  }

}

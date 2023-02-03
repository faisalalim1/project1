import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  userData: any;

  signupForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private _http:HttpClient,private router:Router ) { }
  

  ngOnInit(): void {}
 
  posttForm = new FormGroup({
    userid: new FormControl(""),
    title: new FormControl("")
  })


  getUserFormData() {
    console.log(this.posttForm.value);
   this._http.post<any>("https://jsonplaceholder.typicode.com/albums", this.posttForm.value).subscribe(res=>{
    alert("Data added successfully");

   },err=>{alert("error")})
  }
}

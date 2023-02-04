import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder:FormBuilder, private _http:HttpClient,private router:Router ) { }

  ngOnInit(): void {
   
  }
  signupForms = new FormGroup ({
    name: new FormControl('',[]),
    email:new FormControl(''),
    mobile:new FormControl(''),
    password:new FormControl('')
  })

  //make method to create user
  signup()
  {
    console.log(this.signupForms);
    
    
    this._http.post<any>("http://localhost:3000/signup",this.signupForms.value).subscribe(res=>{
      alert("Registration successfull");
     
      
      this.signupForms.reset();
      this.router.navigate(['login'])
    },err=>{alert("Something went wrong")})
   
  }

}

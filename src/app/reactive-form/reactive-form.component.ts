import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms'
import {Validator} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required,Validators.maxLength(6)]),
    lastUser: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    field4: new FormControl('', [Validators.required]),
  })

  loginUser()
  {
    console.log(this.loginForm.value);
    
  }

  get user()
  {
    return this.loginForm.get('user')
  }

  get lastUser()
  {
    return this.loginForm.get('lastUser')
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl( null, [
        Validators.required
      ])
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      const user = new User( email, password )
      console.log( user )
    }
  }

  onClear(){
    this.loginForm.reset()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createUserForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      name: new FormControl( null, [
        Validators.required
      ]),
      lastname: new FormControl( null, [
        Validators.required
      ]),
      email: new FormControl( null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl( null, [
        Validators.required
      ]),
      password2: new FormControl( null, [
        Validators.required
      ])
    })
  }

  onSubmit(){
    if (this.createUserForm.valid) {
      const { name, lastname, email, password, password2 } = this.createUserForm.value
      if (this.createUserForm.valid && password === password2) {
        const user = new User( email, password, name, lastname )
        console.log( user )
      } else {
        alert("los password son diferentes")
      }
    }
  }

  onClear(){
    this.createUserForm.reset()
  }

}

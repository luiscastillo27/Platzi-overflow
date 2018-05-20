import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';

  constructor( private _auth:AuthService, private router: Router ){}

  isLoggedIn(){
    return this._auth.isLoggedIn()
  }

  fullName(){
    return this._auth.fullName()
  }

  signOut(){
    this._auth.logout()
    this.router.navigateByUrl('/')
  }

}

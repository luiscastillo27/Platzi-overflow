import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';

  constructor( private _auth:AuthService ){}

  isLoggedIn(){
    return this._auth.isLoggedIn()
  }

  fullName(){
    return this._auth.currentUser.fullName()
  }

  signOut(){
    this._auth.logout();
  }

}

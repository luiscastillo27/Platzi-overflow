import { Injectable } from '@angular/core';
import { User } from '../user/user.model';
import { environment } from '../../environments/environment'
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import * as urljoin from 'url-join';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl: string
  private currentUser?: User

  constructor( private _http:Http ) {
    this.usersUrl = urljoin( environment.apiUrl, 'auth' )
    if ( this.isLoggedIn() ){
      const { userId, email, name, lastname } = JSON.parse( localStorage.getItem('user'))
      this.currentUser = new User(email, null, name, lastname, userId )
    }
  }

  signIn( user:User ){
    const body = JSON.stringify(user)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    return this._http.post(urljoin(this.usersUrl, 'login'), body, { headers } )
    .map((resp:Response) => {
      const json = resp.json()
      this.login(json)
      return json
    }).catch( (error:Response) => {
      return Observable.throw( error.json() )
    })
  }

  login = ({ token, userId, name, lastname, email}) => {
    this.currentUser = new User(email, null, name, lastname, userId )
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(this.currentUser))
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null
  }

}

import { Injectable } from '@angular/core'
import { User } from '../user/user.model'
import { environment } from '../../environments/environment'
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http'
import * as urljoin from 'url-join'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersUrl: string
  currentUser?: User

  constructor( private http: Http, private router: Router ) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth')
    if (this.isLoggedIn()) {
      const { userId, email, name, lastname } = JSON.parse(localStorage.getItem('user'))
      this.currentUser = new User(email, null, name, lastname, userId)
    }
  }

  signup(user: User) {
    const body = JSON.stringify(user)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    return this.http.post(urljoin(this.usersUrl, 'signup'), body, { headers })
      .map((response: Response) => {
        const json = response.json()
        this.login(json)
        return json
      })
      .catch((error: Response) => {
        console.log(error)
        return Observable.throw(error.json())
      })
  }

  signin(user: User) {
    const body = JSON.stringify(user)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    return this.http.post(urljoin(this.usersUrl, 'signin'), body, { headers })
      .map((response: Response) => {
        const json = response.json()
        this.login(json)
        return json
      })
      .catch((error: Response) => {
        console.log(error)
        return Observable.throw(error.json())
      })
  }

  login = ({ token, userId, name, lastname, email }) => {
    this.currentUser = new User(email, null, name, lastname, userId)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify({ userId, name, lastname, email }))
    this.router.navigateByUrl('/')
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null
  }

  logout() {
    localStorage.clear()
    this.currentUser = null
  }

  fullName(){
    const { name, lastname } = JSON.parse(localStorage.getItem('user'))
    const fullName = `${name} ${lastname}`
    return fullName
  }

}

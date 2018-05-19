import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { urljoin } from 'url-join'
import { Question } from '../question/question.model'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable({
  providedIn: 'root'
})
export class QustionsService {

  private questionsUrl: string
  constructor( private _http: Http ) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions')
  }

  getQuestions(): Promise<void | Question[]> {
    return this._http.get(this.questionsUrl).toPromise().then( data => {
      data.json() as Question[]
    }).catch( this.handleError )
  }

  getQuestion( id:Number ): Promise<void | Question> {
    const url = urljoin(environment.apiUrl, id)
    return this._http.get(url).toPromise().then( data => {
      data.json() as Question
    }).catch( this.handleError )
  }

  handleError( error: any ){
    const errorMessage = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    console.log(errorMessage)
  }

}

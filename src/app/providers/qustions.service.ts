import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import * as urljoin from 'url-join';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { Question } from '../question/question.model'
import { Answer } from '../answer/answer.model';

@Injectable()

export class QustionsService {

  private questionsUrl: string
  constructor( private _http: Http ) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions')
  }

  getQuestions(): Promise<void | Question[]> {
    return this._http.get(this.questionsUrl)
              .toPromise()
              .then(response => response.json() as Question[])
              .catch(this.handleError);
  }

  getQuestion(id): Promise<void | Question> {
    const url = urljoin(this.questionsUrl, id)
    console.log( url )
    return this._http.get(url)
            .toPromise()
            .then(response => response.json() as Question)
            .catch(this.handleError);
  }

  getToken(){
    const token = localStorage.getItem('token')
    return `?token=${token}`
  }

  addQuestion( question:Question ){
    const body = JSON.stringify(question)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers, method: 'POST'})
    const token = this.getToken()
    return this._http.post(this.questionsUrl + token, body, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
  }

  addAnswer( answer:Answer ){
    const ans = {
      description: answer.descripcion,
      question: {
        id: answer.question.id
      }
    }
    const body = JSON.stringify(ans);
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const idString = answer.question.id.toString()
    const url = urljoin(this.questionsUrl, idString, 'respuestas')
    const token = this.getToken()
    return this._http.post(url + token, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    console.log(errMsg)
  }

}

import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Question } from '../question/question.model'
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import * as urljoin from 'url-join';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

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
    const url = urljoin(this.questionsUrl, id);
    return this._http.get(url)
            .toPromise()
            .then(response => response.json() as Question)
            .catch(this.handleError);
  }

  addQuestion( question:Question ){
    const body = JSON.stringify(question);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, method: 'POST'});

    return this._http.post(this.questionsUrl, body, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }

}

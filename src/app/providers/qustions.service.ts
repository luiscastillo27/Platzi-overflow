import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Question } from '../question/question.model'
import { Http } from '@angular/http'
import * as urljoin from 'url-join';

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

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }

}

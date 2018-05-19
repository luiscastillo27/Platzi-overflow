import { Component, OnInit } from '@angular/core';
import { QustionsService } from '../../providers/qustions.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QustionsService]
})
export class QuestionListComponent implements OnInit {

  questions: Question[]
  loading:boolean
  constructor( private _qs:QustionsService ) {
    this.loading = true
  }

  ngOnInit() {
    this._qs.getQuestions().then( ( resp:Question[] ) => {
      this.questions = resp
      this.loading = false
    })
  }

}

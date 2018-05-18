import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-detaiil',
  templateUrl: './question-detaiil.component.html',
  styleUrls: ['./question-detaiil.component.css']
})
export class QuestionDetaiilComponent implements OnInit {

  private question:Question = new Question(
      'Esta es una pregunta sobre ios',
      'Tengo una duda con MVVM por que tiene como 27 mil archivos si solo con dos...',
      new Date(),
      'devicon-apple-original')
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../answer.model';
import { Question } from '../../question/question.model';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  @Input() question: Question
  constructor() { }

  ngOnInit() {

  }

  onSubmit( form: NgForm ){
    const answer = new Answer(
      form.value.descripcion,
      this.question,
      new Date(),
      new User('Luis', 'Castillo')
    )
    this.question.answers.unshift( answer )
    form.reset()
  }

}

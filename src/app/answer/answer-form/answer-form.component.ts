import { Component, Input} from '@angular/core'
import { NgForm } from '@angular/forms'
import { Answer } from '../answer.model'
import { Question } from '../../question/question.model'
import { User } from '../../user/user.model'
import { QustionsService } from '../../providers/qustions.service'
// import * as SmoothScroll from'smooth-scroll';
import { AuthService } from '../../providers/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  providers: [QustionsService]
})
export class AnswerFormComponent {

  @Input() question: Question
  //private scroll
  constructor( private _qs:QustionsService, private _auth:AuthService, private _router:Router  ) {
    //this.scroll = new SmoothScroll()
  }

  onSubmit( form: NgForm ){

    if ( !this._auth.isLoggedIn() ) {
      this._router.navigateByUrl('login')
    }
    const answer = new Answer(
      form.value.descripcion,
      this.question
    )
    this._qs
      .addAnswer(answer)
      .subscribe(
        ans => {
          this.question.answers.unshift( ans )
          //const anchor = document.querySelector( '#title' );
          //this.scroll.animateScroll(anchor);
        },
        error => {
          console.log( error )
        }
      )
    form.reset()
  }

}

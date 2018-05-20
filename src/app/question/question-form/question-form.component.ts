import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../../question/question.model';
import { QustionsService } from '../../providers/qustions.service';
import icons from '../icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
  providers: [QustionsService]
})
export class QuestionFormComponent {

  icons: Object[] = icons;
  constructor( private _qs:QustionsService, private _router:Router ) { }

  getIconVersion(icon: any) {
    let version;
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }
    if(icon.name =='illustrator'){
      version = icon.versions.svg[0];
    }
    return version;
  }

  onSubmit( form: NgForm ){
    const q = new Question(
      form.value.title,
      form.value.descripcion
    )
    this._qs.addQuestion(q).subscribe( ({ id }) => this._router.navigate(['/pregunta', id]),
      error => console.log( error )
    )
  }
}

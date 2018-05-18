import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../../question/question.model';
import icons from '../icons';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  icons: Object[] = icons;
  constructor() { }

  ngOnInit() {
  }

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
    console.log(q)
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question.model';
import { QustionsService } from '../../providers/qustions.service';

@Component({
  selector: 'app-question-detaiil',
  templateUrl: './question-detaiil.component.html',
  styleUrls: ['./question-detaiil.component.css'],
  providers: [QustionsService]
})
export class QuestionDetaiilComponent implements OnInit, OnDestroy {

  // private question:Question = new Question(
  //     'Esta es una pregunta sobre ios',
  //     'Tengo una duda con MVVM por que tiene como 27 mil archivos si solo con dos...',
  //     new Date(),
  //     'devicon-apple-original')
  private question?:Question
  private loading:boolean
  private sub:any
  constructor( private _qs:QustionsService,  private _ar:ActivatedRoute ) {
    this.loading = true
  }

  ngOnInit() {

    this.sub = this._ar.params.subscribe( nav =>{
      
      this._qs.getQuestion( nav.id ).then( (resp:Question) =>{
        console.log( resp )
        this.question = resp
        this.loading = false
      })

    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}

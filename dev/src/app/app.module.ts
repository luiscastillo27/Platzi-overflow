import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MomentModule } from 'ngx-moment';
//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule } from '@angular/material';
import 'hammerjs';
//components
import { QuestionDetaiilComponent } from './question/question-detaiil/question-detaiil.component';
import { AnswerFormComponent } from './answer/answer-form/answer-form.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetaiilComponent,
    AnswerFormComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    MomentModule,
    BrowserModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

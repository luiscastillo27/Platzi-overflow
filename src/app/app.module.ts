import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MomentModule } from 'ngx-moment';
import { HttpModule } from '@angular/http';
//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatListModule, MatGridListModule, MatRadioModule, MatProgressSpinnerModule, MatMenuModule } from '@angular/material';
import 'hammerjs';
//components
import { QuestionDetaiilComponent } from './question/question-detaiil/question-detaiil.component';
import { AnswerFormComponent } from './answer/answer-form/answer-form.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';

//RouterModule
import { app_routing } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetaiilComponent,
    AnswerFormComponent,
    LoginComponent,
    RegisterComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    FormsModule,
    MatMenuModule,
    HttpModule,
    app_routing,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MomentModule,
    MatListModule,
    BrowserModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

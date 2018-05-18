import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import 'hammerjs';
//components
import { QuestionDetaiilComponent } from './question/question-detaiil/question-detaiil.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetaiilComponent
  ],
  imports: [
    BrowserModule,
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

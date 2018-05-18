import { RouterModule, Routes } from '@angular/router';
//user
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
//question
import { QuestionDetaiilComponent } from './question/question-detaiil/question-detaiil.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { QuestionListComponent } from './question/question-list/question-list.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'preguntas', component: QuestionListComponent },
  { path: 'preguntas/nueva', component: QuestionFormComponent },
  { path: 'pregunta/:id', component: QuestionDetaiilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const app_routing = RouterModule.forRoot(app_routes);

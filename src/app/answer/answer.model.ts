import { Question } from '../question/question.model';
import { User } from '../user/user.model';

export class Answer {
  public descripcion: string
  public question: Question
  public createdAt?: Date
  public user?: User
  constructor( descripcion: string, question: Question, createdAt?: Date, user?: User ){
    this.descripcion = descripcion
    this.question = question
    this.createdAt = createdAt
    this.user = user
  }
}

import { Answer } from '../answer/answer.model';

export class Question {
  public id?: string
  public title: string
  public description: string
  public createdAt?: Date
  public icon?: string
  public answers: Answer[]

  constructor(
    title: string,
    description: string,
    createdAt?: Date,
    icon?: string
  ){
    this.id = "1"
    this.title = title
    this.description = description
    this.createdAt = createdAt
    this.icon = icon
    this.answers = []
  }
}

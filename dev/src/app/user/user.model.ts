export class User {

  constructor(
    public email: string,
    public password: string,
    public name?: string,
    public lastname?: string
  ){}

  fullName() {
    return`${this.name} ${this.lastname}`;
  }

}

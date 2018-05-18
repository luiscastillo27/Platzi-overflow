export class User {
  public name: string
  public lastname: string

  constructor( name: string, lastname: string ){
    this.name = name
    this.lastname = lastname
  }

  fullName() {
    return`${this.name} ${this.lastname}`;
  }

}

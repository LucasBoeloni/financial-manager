export class UserModel {

  public id: number;

  public name: string;

  public surname: string;

  public income: number;

  public password: string;

  public email: string;

  public active: boolean = true;

  public system: string = "sgf";

  constructor() {
  }
}

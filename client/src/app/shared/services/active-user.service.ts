import {UserModel} from "../models/user.model";

const USER = 'user';

export class ActiveUserService {
  private static instance: ActiveUserService;

  private constructor() {
  }

  private get activeUser(): UserModel | null {
    const user = localStorage.getItem(USER);
    if (!!user) {
      const userModel: UserModel = JSON.parse(user) as UserModel;
      if (userModel.system === 'sgf') {
        return userModel;
      }
      return null;
    }
    return null;
  }

  private set activeUser(activeUser: UserModel | null) {
    localStorage.setItem(USER, JSON.stringify(activeUser))
  }

  public static getInstance(): ActiveUserService {
    if (!ActiveUserService.instance) {
      ActiveUserService.instance = new ActiveUserService();
    }

    return ActiveUserService.instance;
  }

  public isLogged(): boolean {
    if (!!this.activeUser) {
      return true;
    }
    return false;
  }

  public setUser(userLogado: UserModel): void {
    this.activeUser = userLogado;
  }

  public getUser(): UserModel | null {
    return this.activeUser;
  }

}

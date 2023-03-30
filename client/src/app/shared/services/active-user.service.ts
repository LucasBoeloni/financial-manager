import {UsuarioModel} from "../models/usuarioModel";

const USER = 'user';

export class ActiveUserService {
	private static instance: ActiveUserService;

  private constructor(
  ) {
  }
	public static getInstance(): ActiveUserService {
		if (!ActiveUserService.instance) {
			ActiveUserService.instance = new ActiveUserService();
		}

		return ActiveUserService.instance;
	}

	private get activeUser(): UsuarioModel | null {
		const user = localStorage.getItem(USER);
    if(!!user){
      return JSON.parse(user) as UsuarioModel;
    }
    return null;
	}

	private set activeUser(activeUser: UsuarioModel | null) {
		 localStorage.setItem(USER,JSON.stringify(activeUser))
	}


  public isLogged(): boolean {
		if(!!this.activeUser){
			return true;
		}
		return false;
	}

  public setUser(usuarioLogado: UsuarioModel): void {
    this.activeUser = usuarioLogado;
  }

  public getUser(): UsuarioModel | null{
    return this.activeUser;
  }

}

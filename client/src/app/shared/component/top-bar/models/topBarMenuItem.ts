export class TopBarMenuItem {
  constructor(
    public label: string,
    public routerLink: string,
    public icon?: string,
    public display: boolean = true
  ) {
  }
}

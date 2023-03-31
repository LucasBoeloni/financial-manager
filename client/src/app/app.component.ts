import {Component, OnInit} from '@angular/core';
import {SideBarMenuItem} from "./shared/component/side-bar/models/sideBarMenuItem";
import {NavigationEnd, Router} from "@angular/router";
import {ActiveUserService} from "./shared/services/active-user.service";
import {RouteNames} from "./rout-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  userOn: boolean = false;
  menuItens: SideBarMenuItem[] = [];

  constructor(
    private router: Router,
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.userOn = ActiveUserService.getInstance().isLogged();
        this.userOnHandle()
      }
    });
  }

  ngOnInit() {

    this.menuItens.push(...[
      new SideBarMenuItem('Dashboard', RouteNames.ROUT_DASHBOARD, 'pi pi-chart-bar'),
      new SideBarMenuItem('Expense', '/', 'pi pi-calendar-times'),
      new SideBarMenuItem('Goal', '/', 'pi pi-car'),
    ])
  }

  private userOnHandle() {
    if (!this.userOn) {
      this.router.navigateByUrl(RouteNames.ROUT_LOGIN);
    }
  }
}

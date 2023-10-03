import {Component, OnInit} from '@angular/core';
import {TopBarMenuItem} from "./shared/component/top-bar/models/topBarMenuItem";
import {NavigationEnd, Router} from "@angular/router";
import {ActiveUserService} from "./shared/services/active-user.service";
import {RouteNames} from "./shared/utils/rout-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  userOn: boolean = false;
  menuItens: TopBarMenuItem[] = [];

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
      new TopBarMenuItem('Dashboard', RouteNames.DASHBOARD, 'pi pi-chart-bar'),
      new TopBarMenuItem('Expense', RouteNames.EXPENSE, 'pi pi-calendar-times'),
      new TopBarMenuItem('Goal', RouteNames.GOAL, 'pi pi-car'),
    ])
  }

  private userOnHandle() {
    if (!this.userOn) {
      this.router.navigateByUrl(RouteNames.LOGIN);
    }
  }
}

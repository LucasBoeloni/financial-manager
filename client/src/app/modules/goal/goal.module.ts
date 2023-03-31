import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalComponent } from './goal/goal.component';
import {SharedModule} from "../../shared/shared.module";
import {GoalRoutingModule} from "./goal-routing.module";



@NgModule({
  declarations: [
    GoalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    GoalRoutingModule
  ],
  exports: [
    GoalComponent
  ]
})
export class GoalModule { }

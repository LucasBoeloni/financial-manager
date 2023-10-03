import {Component, Input} from '@angular/core';
import {TopBarMenuItem} from './models/topBarMenuItem';

@Component({
  selector: 'sgf-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Input() menuItens: TopBarMenuItem[] = [];


}

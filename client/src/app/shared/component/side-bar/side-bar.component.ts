import {Component, Input} from '@angular/core';
import {SideBarMenuItem} from './models/sideBarMenuItem';

@Component({
  selector: 'sgf-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input() menuItens: SideBarMenuItem[] = [];

  visible: boolean = false;
  visibleClass: boolean = false;

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  switchVisible(): void {
    this.visibleClass = !this.visibleClass;
    if (this.visible) {
      this.visible = !this.visible;
      return;
    }
    this.delay(200).then(() => this.visible = !this.visible);
  }

}

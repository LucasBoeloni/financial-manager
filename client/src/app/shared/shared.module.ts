import {NgModule} from '@angular/core';
import {PRIMENG_IMPORTS} from './primeng-imports';
import {TopBarComponent} from "./component/top-bar/top-bar.component";
import {RouterLink} from "@angular/router";
import {ANGULAR_IMPORTS} from "./angular-imports";
import {BlockableDivComponent} from "./component/blockable-div/blockable-div.component";
import {ModalFormComponent} from "./component/modal-form/modal-form.component";

const SHARED_MODULE_PRIVATE_DECLARATIONS: any[] = [];

const SHARED_MODULE_DECLARATIONS: any[] = [
  BlockableDivComponent,
  TopBarComponent,
  ModalFormComponent
];

@NgModule({
  imports: [
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS,
    RouterLink
  ],
  declarations: [
    SHARED_MODULE_DECLARATIONS,
    SHARED_MODULE_PRIVATE_DECLARATIONS
  ],
  exports: [
    SHARED_MODULE_DECLARATIONS,
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS
  ],
  providers: []
})
export class SharedModule {
}

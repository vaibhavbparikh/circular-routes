import { NgModule } from '@angular/core';
import { SubModuleCRoutingModule } from '../../routing/sub-module-c.routing';
import { SubModuleCComponent } from './sub-module-c.component';
@NgModule({
  declarations: [
    SubModuleCComponent
  ],
  imports: [
    SubModuleCRoutingModule
  ]
})
export class SubModuleCModule { }

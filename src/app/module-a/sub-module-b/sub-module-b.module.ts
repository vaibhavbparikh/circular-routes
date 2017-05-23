import { NgModule } from '@angular/core';
import { SubModuleBComponent } from './sub-module-b.component';
import { SubModuleBRoutingModule } from '../../routing/sub-module-b.routing';


@NgModule({
  declarations: [
    SubModuleBComponent,
  ],
  imports: [
    SubModuleBRoutingModule
  ]
})
export class SubModuleBModule { }

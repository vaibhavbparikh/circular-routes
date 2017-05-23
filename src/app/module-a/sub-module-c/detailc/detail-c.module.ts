import { NgModule } from '@angular/core';
import { DetailCComponent } from './detail.component';
import { SubModuleCDetailRoutingModule } from '../../../routing/sub-module-c-detail.routing';


@NgModule({
  declarations: [
    DetailCComponent
  ],
  imports: [
    SubModuleCDetailRoutingModule
  ]
})
export class DetailCModule { }

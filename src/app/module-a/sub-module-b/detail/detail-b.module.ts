import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { SubModuleBDetailRoutingModule } from './sub-module-b-detail.routing';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    SubModuleBDetailRoutingModule
  ]
})
export class DetailBModule { }

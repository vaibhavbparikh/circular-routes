import { NgModule } from '@angular/core';
import { ModuleARoutingModule } from '../routing/module-a.routing';
import { ModuleAComponent } from './module-a.component';

@NgModule({
  declarations: [
    ModuleAComponent
  ],
  imports: [
    ModuleARoutingModule,
  ]
})
export class ModuleAModule { }

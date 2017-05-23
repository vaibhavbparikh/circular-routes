import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubModuleCComponent } from '../module-a/sub-module-c/sub-module-c.component';


const routes: Routes = [
  {
    path: '',
    component: SubModuleCComponent,
    children: [
      {
        path: ':id',
        loadChildren: 'app/module-a/sub-module-c/detailc/detail-c.module#DetailCModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // TODO check if we need to provide resolvers
  providers: []
})


export class SubModuleCRoutingModule { }



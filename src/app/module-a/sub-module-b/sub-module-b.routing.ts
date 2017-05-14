import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubModuleBComponent } from './sub-module-b.component';


const routes: Routes = [
  {
    path: '',
    component: SubModuleBComponent,
    children: [
      {
        path: ':id',
        loadChildren: 'app/module-a/sub-module-b/detail/detail-b.module#DetailBModule',
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


export class SubModuleBRoutingModule { }



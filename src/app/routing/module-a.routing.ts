import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAComponent } from '../module-a/module-a.component';


const routes: Routes = [
  {
    path: '',
    component: ModuleAComponent,
    children: [
      {
        path: 'topic',
        loadChildren: 'app/module-a/sub-module-b/sub-module-b.module#SubModuleBModule',
      },
      {
        path: 'action',
        loadChildren: 'app/module-a/sub-module-c/sub-module-c.module#SubModuleCModule',
      }
    ]
  },
  { path: '', redirectTo: 'topic', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // TODO check if we need to provide resolvers
  providers: []
})


export class ModuleARoutingModule { }



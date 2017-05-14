import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCComponent } from './detail.component';


const routes: Routes = [
  {
    path: '',
    component: DetailCComponent,
  },
  {
    path: 'topic-detail/:id',
    loadChildren: 'app/module-a/sub-module-b/detail/detail-b.module#DetailBModule',
  }

  // I have other different routes which I am loading from detail page and i need to maintain back stack from there
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // TODO check if we need to provide resolvers
  providers: []
})


export class SubModuleCDetailRoutingModule { }



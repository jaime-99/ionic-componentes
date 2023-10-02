import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecBoxPage } from './chec-box.page';

const routes: Routes = [
  {
    path: '',
    component: ChecBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecBoxPageRoutingModule {}

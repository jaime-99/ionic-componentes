import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarPage } from './avatar.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    ComponentsModule],
})
export class AvatarPageRoutingModule {}

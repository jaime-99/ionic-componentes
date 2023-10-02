import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecBoxPageRoutingModule } from './chec-box-routing.module';

import { ChecBoxPage } from './chec-box.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecBoxPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChecBoxPage]
})
export class ChecBoxPageModule {}

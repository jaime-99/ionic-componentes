import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardPageRoutingModule } from './ion-card-routing.module';

import { IonCardPage } from './ion-card.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonCardPage]
})
export class IonCardPageModule {}

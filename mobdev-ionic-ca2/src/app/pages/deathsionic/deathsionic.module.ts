import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathsionicPageRoutingModule } from './deathsionic-routing.module';

import { DeathsionicPage } from './deathsionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathsionicPageRoutingModule
  ],
  declarations: [DeathsionicPage]
})
export class DeathsionicPageModule {}

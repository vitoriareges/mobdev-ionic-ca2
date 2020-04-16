import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathsionicPage } from './deathsionic.page';

const routes: Routes = [
  {
    path: '',
    component: DeathsionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathsionicPageRoutingModule {}

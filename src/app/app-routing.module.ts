import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DistrictsComponent } from './districts/districts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'districts', component: DistrictsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

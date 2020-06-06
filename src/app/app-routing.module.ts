import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictsComponent } from './districts/districts.component';
import { HomeComponent } from './home/home.component';
import { StreetsComponent } from './streets/streets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'districts', component: DistrictsComponent },
  { path: 'streets', component: StreetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

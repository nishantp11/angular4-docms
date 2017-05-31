import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DoctorDetailComponent } from './doctor-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomePageComponent } from './home.component';

const appRoutes: Routes = [
  { path: 'doctor/:id', component: DoctorDetailComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
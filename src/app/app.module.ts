import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DoctorDetailComponent } from './doctor-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomePageComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
   	BrowserModule,
   	HttpModule,
   	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	DoctorDetailComponent,
  	PageNotFoundComponent,
  	HomePageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

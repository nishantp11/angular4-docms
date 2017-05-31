import { Component } from '@angular/core';
import { AppService } from './app.service';

import { Clinic } from './clinic';
import { Doctor } from './doctor';


@Component({
  selector: 'my-app',
  template: `
  <ul class="clinics">
    <li *ngFor="let clinic of clinics">
      <span class="badge">{{ clinic.id }}</span> {{ clinic.name }}
    </li>
  </ul>
  <ul class="doctors">
    <li *ngFor="let doctor of doctors">
      <span class="badge">{{ doctor.docID }}</span><a routerLink="/doctor/{{ doctor.docID }}"> {{ doctor.firstName }} {{ doctor.lastName }}</a>
    </li>
  </ul>
  <router-outlet></router-outlet>`,
  providers: [AppService]
})


export class AppComponent {
  clinics : Clinic[];
  doctors: Doctor[];
  constructor(private _dataservice: AppService){ 
   } 
   ngOnInit() : void { 
      this._dataservice.getInfo() 
      .subscribe(
        data => {
          this.clinics = data.clinics;
          this.doctors = data.doctors;
        }
      );

   } 
}

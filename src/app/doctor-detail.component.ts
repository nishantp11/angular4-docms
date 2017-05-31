import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Doctor } from './doctor';

import { AppService } from './app.service';

@Component({
  templateUrl: './doctor-detail.component.html',
})
export class DoctorDetailComponent {
	doctor: Doctor;
	constructor(
		private _dataservice: AppService,
		private route: ActivatedRoute,
		private location: Location
	){}
	ngOnInit() : void { 
      this.route.params
      .switchMap((params: Params) => this._dataservice.getDoctor(params['id']))
      .subscribe(doctor => this.doctor=doctor);
   }
   goBack(): void {
  		this.location.back();
   }
}

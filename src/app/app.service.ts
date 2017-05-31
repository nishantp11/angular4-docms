import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

import { Doctor } from './doctor';

@Injectable()
export class AppService {
	private _dataurl = 'app/dummy.json';
	constructor(private _http: Http){} 
	getInfo(): Observable<any>{
		return this._http.get(this._dataurl)
		.map((response: Response) => response.json());
	}

	getDoctor(id: string): Promise<any> {
		return this._http.get(this._dataurl)
		.map((res: Response) => res.json()['doctors'])
		.map(doctors => doctors.find(doc => doc.docID === id));
	}
}

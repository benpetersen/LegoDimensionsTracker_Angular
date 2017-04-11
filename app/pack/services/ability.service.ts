import {Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_ABILITIES = 'app/abilities.json';
	
@Injectable()
export class AbilityService {
	constructor(@Inject(Http) private _http: Http) {}
	
	getAbilities_RxObservable() {
		return this._http.get(URL_ABILITIES)
			.map((response: Response) => response.json())
			.catch(this._handleError);
	}
	
	_handleError(err:any){
		console.log(err);
		return Observable.throw(err);
	}
}
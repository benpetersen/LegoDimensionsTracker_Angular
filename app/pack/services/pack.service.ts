import {Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_PACKS = 'app/packs.json';
	
@Injectable()
export class PackService {
	constructor(@Inject(Http) private _http: Http) {}

	getPacks_RxObservable() {
		return this._http.get(URL_PACKS)
			.map((response: Response) => response.json())
			.catch(this._handleError);
	}
	
	_handleError(err:any){
		console.log(err);
		return Observable.throw(err);
	}
}
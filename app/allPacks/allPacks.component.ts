import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';

import {PackService} from '../services/pack.service';

@Component({
	selector: 'allPacks', //<app-packs>
	templateUrl: 'app/allPacks/allPacks.component.html',
	providers: [PackService]
})

export class AllPacksComponent implements OnInit{
	packs: any[];
	
	constructor(private _packsService: PackService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => {
					this.packs = packs
				}
			)
	};

}
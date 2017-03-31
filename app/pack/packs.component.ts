import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {PackService} from './services/pack.service';
import {SearchPipe} from './pipes/search.pipe';

@Component({
	selector: 'app-packs', //<app-packs>
	templateUrl: 'app/pack/packs.component.html',
	providers: [PackService]
})

export class PacksComponent implements OnInit{
	packs: any[];
	searchTerm: string;
	searchResults: any[];
	
	constructor(private _packsService: PackService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				//it worked
				(packs) => this.packs = packs,
				(packs) => this.searchResults = packs
				//error :(
				
			);
	};
}
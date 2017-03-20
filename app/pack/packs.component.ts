import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {PackService} from './pack.service';
import {SearchPipe} from './search-pipe';

@Component({
	selector: 'app-packs', //<app-packs>
	pipes: [SearchPipe],
	templateUrl: 'app/pack/packs.component.html',
	providers: [PackService]
})

export class PacksComponent implements OnInit{
	packs: any[];
	searchTerm: string;
	searchResults = new Array();
	
	constructor(private _packsService: PackService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => this.packs = packs,
				(packs) => this.searchResults = packs,
				(err)  => { console.log(err); }
			);
	};
}
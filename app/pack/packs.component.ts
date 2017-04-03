import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {PackService} from './services/pack.service';
import {SearchPipe} from './pipes/search.pipe';
import {SearchPackNamePipe} from './pipes/searchPackName.pipe';

@Component({
	selector: 'app-packs', //<app-packs>
	templateUrl: 'app/pack/packs.component.html',
	providers: [PackService]
})

export class PacksComponent implements OnInit{
	packs: any[];
	ownedPacks = new Array();
	searchAbilityName: string;
	searchTermPackName: string;
	searchAbilitiesResults: any[];
	
	constructor(private _packsService: PackService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => this.packs = packs,
				(packs) => this.searchAbilitiesResults = packs
			);
	};
	showCharacter(event, i, item){
		item.show = !item.show;
		alert(item);
	}
	addPack(pack){
		//implement .indexOf
		this.ownedPacks.push(pack);
	}
	removePack(pack){
		//implement remove pack
	}
}
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {PackService} from '../services/pack.service';
import {AbilityService} from '../services/ability.service';
import {SearchPipe, SearchPackNamePipe, SearchAbilityNamePipe} from '../pipes/index';

@Component({
	selector: 'abilitySearch-app', //<app-packs>
	templateUrl: 'app/abilitySearch/abilitySearch.component.html',
	providers: [PackService, AbilityService]
})

export class AbilitySearchComponent implements OnInit{
	packs: any[];
	abilities: any[];
	searchTermAbilityName: string;
	searchAbilitiesResults: any[];
	
	constructor(private _packsService: PackService, private _abilitiesService: AbilityService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => {
					this.packs = packs,
					this.searchAbilitiesResults = packs
				}
			)
		this._abilitiesService.getAbilities_RxObservable()
			.subscribe(
				(abilities) => {
					 this.abilities = abilities
				}
			)
	};

}
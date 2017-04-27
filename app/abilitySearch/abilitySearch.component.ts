import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {AbilityService} from '../services/ability.service';
import {SearchPipe, SearchPackNamePipe, SearchAbilityNamePipe} from '../pipes/index';

@Component({
	selector: 'abilitySearch-app', //<app-packs>
	templateUrl: 'app/abilitySearch/abilitySearch.component.html',
	providers: [AbilityService]
})

export class AbilitySearchComponent implements OnInit{
	abilities: any[];
	searchTermAbilityName: string;
	searchAbilitiesResults: any[];
	
	constructor(private _abilitiesService: AbilityService) {}
	
	ngOnInit(){
		//Rx observable with subscribe function to a abilities array
		this._abilitiesService.getAbilities_RxObservable()
			.subscribe(
				(abilities) => {
					 this.abilities = abilities
				}
			)
	};

}
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';

import {PackService} from './services/pack.service';
import {AbilityService} from './services/ability.service';
import {SearchPipe} from './pipes/search.pipe';
import {SearchPackNamePipe} from './pipes/searchPackName.pipe';

@Component({
	selector: 'app-packs', //<app-packs>
	templateUrl: 'app/pack/packs.component.html',
	providers: [PackService, AbilityService]
})

export class PacksComponent implements OnInit{
	packs: any[];
	abilities: any[];
	ownedPacks = new Array();
	neededAbilities = new Array();
	searchAbilityName: string;
	searchTermPackName: string;
	searchAbilitiesResults: any[];
	
	constructor(private _packsService: PackService, private _abilitiesService: AbilityService, private _cookieService: CookieService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => this.packs = packs,
				(packs) => this.searchAbilitiesResults = packs,
				(packs) => this.getOwnedPacks()
			)
		this._abilitiesService.getAbilities_RxObservable()
			.subscribe(
				(abilities) => this.abilities = abilities
			)
	};
	getOwnedPacks(){
		var cookie = this.getCookie("LegoDimentionsOwnedPacks");
		if(cookie != undefined){
			var ownedPackNumbers = cookie.split(',');
			for(var i = 0; i< ownedPackNumbers.length; i++){
				for(var j = 0; j < this.packs.length; j++){
					if(this.packs[j].packNumber == ownedPackNumbers[i]){
						this.ownedPacks.push(this.packs[j]);
					}
				}
			}
		}
	}
	showCharacter(event, i, item){
		item.show = !item.show;
		alert(item);
	}
	addPack(pack){
		//implement .indexOf
		
		var cookie = this.getCookie("LegoDimentionsOwnedPacks");
		var ownedPack = false;
		
		if(cookie != undefined){
			ownedPack = cookie.includes(pack.packNumber);
			if(!ownedPack){
				cookie += ", " + pack.packNumber;
				this.ownedPacks.push(pack);
			}
		}else{
			cookie = pack.packNumber;
			this.ownedPacks.push(pack);
		}
		this._cookieService.put("LegoDimentionsOwnedPacks", cookie);
		
		this.getAbilitiesNeededForCompletion();
	}
	removePack(pack){
		//implement remove pack
		
	}
	getCookie(key: string){
		return this._cookieService.get(key);
	}
	getAbilitiesNeededForCompletion(){
		/*Go through each ability
		If not owned, add to neededAbilities
		Use this to show list of characters need to buy
		*/
		if(this.abilities.length > 0){
			for(var i = 0; i< this.abilities.length; i++){
				for(var j = 0; j < this.abilities[i].CharactersWithAbility.length; j++){
					//Characters that have current ability
					//Do you own this character? If not, and at end of list, add to needed abilities 
					for(var k = 0; k < this.ownedPacks.length; k++){
						for(var l = 0; l < this.ownedPacks[k].characters.length; l++){
							//if(this.abilities[i].)
						}
					//this.neededAbilities.append();
				}
				}
				
			}
		}
	}
}
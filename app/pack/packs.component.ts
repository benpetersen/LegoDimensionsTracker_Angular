import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';

import {PackService} from '../services/pack.service';
import {AbilityService} from '../services/ability.service';
import {SearchPipe, SearchPackNamePipe, SearchAbilityNamePipe} from '../pipes/index';


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
				(packs) => {
					this.packs = packs,
					this.searchAbilitiesResults = packs,
					this.getOwnedPacks()
				}
			)
		this._abilitiesService.getAbilities_RxObservable()
			.subscribe(
				(abilities) => {
					 this.abilities = abilities,
					 this.getAbilitiesNeededForCompletion()
				}
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
		this.searchTermPackName = "";
		this.getAbilitiesNeededForCompletion();
	}
	removePack(removePack){
		this.ownedPacks = this.ownedPacks.filter(function(item){
			return item.packName !== removePack.packName;	
		})
		this.savePacks();
		this.getAbilitiesNeededForCompletion();
	}
	getCookie(key: string){
		return this._cookieService.get(key);
	}
	savePacks(){
		var cookie = "";
		this.ownedPacks.forEach(function(pack){
			if(cookie != undefined){
				cookie += ", " + pack.packNumber;
			}else{
				cookie = pack.packNumber;
			}
		})
		this._cookieService.put("LegoDimentionsOwnedPacks", cookie);
	}
	getAbilitiesNeededForCompletion(){
		/*
		Check if ability is owned by iterating through ownedPacks characters
		Comparing the list of characters with the ability to ownedPacks character names
		--Brute force, it's probably the worst way to do this, but it works
		*/
		
		this.neededAbilities = new Array();
		
		for(var i = 0; i < this.abilities.length; i++){
			var ability = this.abilities[i];
			var owned = false;
			
			if(this.neededAbilities.indexOf(ability) != -1){
				//ability already in neededAbilities
				break;
			}
			//Messy way to iterate through characters, checking if character is owned
			for(var j = 0; j < this.abilities[i].CharactersWithAbility.length; j++){
				var characterWithAbility = this.abilities[i].CharactersWithAbility[j];
				
				
				//Do you own this character? If not, add to needed abilities 
				for(var k = 0; k < this.ownedPacks.length; k++){
					for(var l = 0; l < this.ownedPacks[k].characters.length; l++){
						var ownedCharacter = this.ownedPacks[k].characters[l].name;
						if(ownedCharacter == characterWithAbility){
							owned = true;
							break;
						}
					}
					if(owned == true){
						//character is owned, exit out of outer loop
						break;
					}
				}
			}
			//If not owned, add to neededAbilities
			if(owned == false){
				this.neededAbilities.push(ability);
			}
		}
	}
}
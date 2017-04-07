import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';

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
	abilitiesNeededForCompletion = new Array();
	searchAbilityName: string;
	searchTermPackName: string;
	searchAbilitiesResults: any[];
	
	constructor(private _packsService: PackService, private _cookieService: CookieService) {}
	
	ngOnInit(){
		//Rx observable version with subscribe function to a pack array
		this._packsService.getPacks_RxObservable()
			.subscribe(
				(packs) => this.packs = packs,
				(packs) => this.searchAbilitiesResults = packs,
				(packs) => this.getOwnedPacks();
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
		
		this.getOwnedAbilities();
	}
	removePack(pack){
		//implement remove pack
		
	}
	getCookie(key: string){
		return this._cookieService.get(key);
	}
	getNeededAbilitiesForCompletion(){
		//complete list of needed abilities + combo abilities
		for(var i = 0; i < ownedPacks.length; i++){
			for(var j = 0; j < ownedPacks[i].characters.length; j++){
				
			}
			this.abilitiesNeededForCompletion.append
		}
	}
}
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: "search"
})
export class SearchPipe implements PipeTransform{
	transform(data: any[], searchAbilityName: string){
		var items = new Array();
		if(searchAbilityName){
			searchAbilityName = searchAbilityName.toLowerCase();
			data.forEach(function(item: any){
				item.characters.forEach(function(character: any){
					character.abilities.forEach(function(ability: string){
						if(ability.toLowerCase().indexOf(searchAbilityName) !== -1){
							items.push(character);
						}
					})
				})
			})
		}
		return items;
	}
}
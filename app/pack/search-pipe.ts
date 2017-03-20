import {Pipe} from '@angular/core';

@Pipe({
	name: "search"
})
export class SearchPipe{
	transform(value: any[], term: string){
		var items = new Array();
		if(!term){
            return value;
       	}else{
			var _term = term.toLowerCase();
			value.forEach(function(item: any){
				item.characters.forEach(function(character: any){
					character.abilities.forEach(function(ability: string){
						if(ability.toLowerCase().indexOf(_term) !== -1){
							items.push(character);
						}
					})
				})
			})
		}
		return items;
	}
}
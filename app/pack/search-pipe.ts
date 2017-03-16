import {Pipe} from '@angular/core';

@Pipe({
	name: "search"
})
export class SearchPipe{
	transform(value, [term]){
		var items = [];
		if(!term){
            return value;
       	}else{
			var _term = term.toLowerCase();
			value.forEach(function(item){
				item.characters.forEach(function(character){
					character.abilities.forEach(function(ability){
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
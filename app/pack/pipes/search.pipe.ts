import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: "search"
})
export class SearchPipe implements PipeTransform{
	transform(data: any[], searchTerm: string){
		var items = new Array();
		if(!searchTerm){
            items = data;
       	}else{
			searchTerm = searchTerm.toLowerCase();
			data.forEach(function(item: any){
				item.characters.forEach(function(character: any){
					character.abilities.forEach(function(ability: string){
						if(ability.toLowerCase().indexOf(searchTerm) !== -1){
							items.push(character);
						}
					})
				})
			})
		}
		return items;
	}
}
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: "searchAbilityName"
})
export class SearchAbilityNamePipe implements PipeTransform{
	transform(data: any[], searchCriteria: string){
		var items = new Array();
		if(searchCriteria){
			searchCriteria = searchCriteria.toLowerCase();
			data.forEach(function(item: any){
				if(item.CharacterAbilityName.toLowerCase().indexOf(searchCriteria) !== -1){
					items.push(item);
				}
			})
		}
		return items;
	}
}
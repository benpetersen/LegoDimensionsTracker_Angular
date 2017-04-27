import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: "searchPackName"
})
export class SearchPackNamePipe implements PipeTransform{
	transform(data: any[], searchCriteria: string){
		var items = new Array();
		if(searchCriteria){
			searchCriteria = searchCriteria.toLowerCase();
			data.forEach(function(pack: any){
				if(pack.packName.toLowerCase().indexOf(searchCriteria) !== -1){
					items.push(pack);
				}
			})
		}
		return items;
	}
}
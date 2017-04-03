import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: "searchPackName"
})
export class SearchPackNamePipe implements PipeTransform{
	transform(data: any[], searchTermPackName: string){
		var items = new Array();
		if(searchTermPackName){
			searchTermPackName = searchTermPackName.toLowerCase();
			data.forEach(function(pack: any){
				if(pack.packName.toLowerCase().indexOf(searchTermPackName) !== -1){
					items.push(pack);
				}
			})
		}
		return items;
	}
}
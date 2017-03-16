import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-pack', //<app-pack>
	templateUrl: 'app/pack/pack.component.html'
})
export class PackComponent implements OnInit{
	@Input() pack: {packName: number, packType: string, characters: any[]};
	
	myColor = 'gray';
	
	ngOnInit(){ }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-character', //<app-pack>
	templateUrl: 'app/pack/character.component.html'
})
export class CharacterComponent implements OnInit{
	@Input() character: {name: string, abilities: any[]};
	
	ngOnInit(){ }
}

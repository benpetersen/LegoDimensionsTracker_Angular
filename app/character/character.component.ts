import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-character', //<app-pack>
	templateUrl: 'app/character/character.component.html'
})
export class CharacterComponent implements OnInit{
	@Input() character: {name: string, abilities: any[]};
	
	ngOnInit(){ }
}

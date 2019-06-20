import { Component } from '@angular/core';

// import { Teas } from '../Teas';


@Component({
	selector: 'app-tea-entry',
	styleUrls: ['./tea-entry.component.css'],
	templateUrl: './tea-entry.component.html'
})
// asdf
export class TeaEntryComponent {
	desc: string;
	name: string;
	taste: string;
	type: string;

	// constructor() {}

	constructor(public NAME: string, public TYPE: string, public TASTE: string, public DESC: string) {
		this.name = NAME;
		this.type = TYPE;
		this.taste = TASTE;
		this.desc = DESC;
	}

	// share() {
	// 	window.alert('The tea has been shared!');
	// }
}

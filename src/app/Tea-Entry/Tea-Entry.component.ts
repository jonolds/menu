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

	// constructor(public name: string, public type: string, public taste: string, public desc: string) {
	// 	this.name = name;
	// 	this.type = type;
	// 	this.taste = taste;
	// 	this.desc = desc;
	// }

	// share() {
	// 	window.alert('The tea has been shared!');
	// }
}

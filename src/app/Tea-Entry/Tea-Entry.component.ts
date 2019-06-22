import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-tea-entry',
	styleUrls: ['./tea-entry.component.css'],
	templateUrl: './tea-entry.component.html'
})
// asdf
export class TeaEntryComponent {
	@Input() object: any;
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

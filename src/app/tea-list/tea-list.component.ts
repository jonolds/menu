import { Component } from '@angular/core';

import { Teas } from '../teas';

@Component({
	selector: 'app-tea-list',
	templateUrl: './tea-list.component.html',
	styleUrls: ['./tea-list.component.css']
})
export class TeaListComponent {
	teas = Teas;

	share() {
		window.alert('The tea has been shared!');
	}
}

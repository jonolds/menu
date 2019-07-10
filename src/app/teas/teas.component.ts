import {Component, OnInit} from '@angular/core';

import {Tea} from '../tea';
import {TeaService} from '../tea.service';

@Component({
	selector: 'app-teas',
	templateUrl: './teas.component.html',
	styleUrls: ['./teas.component.css']
})
export class TeasComponent implements OnInit {
	teas: Tea[];

	constructor(private teaService: TeaService) { }

	ngOnInit() {
		this.getTeas();
	}

	getTeas(): void {
		this.teaService.getTeas().subscribe(teas => this.teas = teas);
	}
}

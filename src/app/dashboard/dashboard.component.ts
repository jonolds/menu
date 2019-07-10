import {Component, OnInit} from '@angular/core';
import {Tea} from '../tea';
import {TeaService} from '../tea.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	teas: Tea[] = [];

	constructor(private teaService: TeaService) { }

	ngOnInit() {
		this.getTeas();
	}

	getTeas(): void {
		this.teaService.getTeas().subscribe(teas => this.teas = teas.slice(1, 5));
	}
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Tea} from '../tea';
import {TeaService} from '../tea.service';

@Component({
	selector: 'app-tea-detail',
	templateUrl: './tea-detail.component.html',
	styleUrls: ['./tea-detail.component.css']
})
export class TeaDetailComponent implements OnInit {
	tea: Tea;

	constructor(
		private route: ActivatedRoute,
		private teaService: TeaService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.getTea();
	}

	getTea(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.teaService.getTea(id).subscribe(tea => this.tea = tea);
	}

	goBack(): void {
		this.location.back();
	}
}

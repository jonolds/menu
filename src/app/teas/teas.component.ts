import {Component, OnInit} from '@angular/core';

import {Tea} from '../definitions/tea';
import {ProductService} from '../product.service';

@Component({
	selector: 'app-teas',
	templateUrl: './teas.component.html',
	styleUrls: ['./teas.component.css']
})
export class TeasComponent implements OnInit {
	teas: Tea[];

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.getTeas();
	}

	getTeas(): void {
		this.productService.getTeas().subscribe(teas => this.teas = teas);
	}
}
